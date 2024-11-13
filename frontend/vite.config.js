import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        testEnvironment: 'jsdom',
        define: {
            'process.env.BE_URL': JSON.stringify(env.BE_URL),
        },
        plugins: [react()],
    }
})
