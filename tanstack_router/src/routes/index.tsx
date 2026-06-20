import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div style={{ padding: '1rem' }}>
      <h1>Home</h1>
      <p>Welcome to TanStack Router!</p>
    </div>
  ),
})
