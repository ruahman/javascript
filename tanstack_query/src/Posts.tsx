import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getPosts, createPost, type Post } from './api'

export default function Posts() {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')

  const { data, isPending, isError, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      setTitle('')
    },
  })

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>TanStack Query Demo</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (title.trim()) mutation.mutate({ title, body: 'Demo body', userId: 1 })
        }}
        style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New post title"
          style={{ flex: 1, padding: '0.4rem' }}
        />
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Adding…' : 'Add Post'}
        </button>
      </form>

      {mutation.isError && (
        <p style={{ color: 'red' }}>Error: {mutation.error.message}</p>
      )}

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: '0.5rem' }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
