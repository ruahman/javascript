import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react({
      babel: {
        plugins: [
          // React Compiler must run first in the Babel pipeline.
          ['babel-plugin-react-compiler', { target: '19' }],
          ['module:@preact/signals-react-transform'],
        ],
      },
    }),
  ],
})
