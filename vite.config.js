import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    testEnvironment: 'jsdom',
    plugins: [react()],
})
