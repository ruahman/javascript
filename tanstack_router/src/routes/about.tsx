import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => (
    <div style={{ padding: '1rem' }}>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  ),
})
