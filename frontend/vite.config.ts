import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [
    react(),
    EnvironmentPlugin([
      'VITE_REACT_APP_GOOGLE_MAPS_API_KEY',
      'VITE_REACT_APP_GRAPHQL_ENDPOINT'
    ]),
  ]
})
