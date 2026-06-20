import { createCollection } from '@tanstack/react-db'
import { queryCollectionOptions } from '@tanstack/query-db-collection'
import { queryClient } from './queryClient'

export interface Todo {
  id: string
  text: string
  completed: boolean
}

const seedTodos: Todo[] = [
  { id: '1', text: 'Learn TanStack DB', completed: false },
  { id: '2', text: 'Build a reactive app', completed: false },
  { id: '3', text: 'Try optimistic mutations', completed: true },
]

export const todoCollection = createCollection(
  queryCollectionOptions<Todo>({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => seedTodos,
    getKey: (item) => item.id,
    queryClient,
    onInsert: async () => {},
    onUpdate: async () => {},
    onDelete: async () => {},
  }),
)
