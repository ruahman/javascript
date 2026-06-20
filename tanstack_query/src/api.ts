export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const BASE = 'https://jsonplaceholder.typicode.com'

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${BASE}/posts?_limit=10`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export const createPost = async (post: Omit<Post, 'id'>): Promise<Post> => {
  const res = await fetch(`${BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  if (!res.ok) throw new Error('Failed to create post')
  return res.json()
}
