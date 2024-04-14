import {
    resolve
} from 'path'
import {
    defineConfig
} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                search: resolve(__dirname, 'pages/search/index.html'),
                car: resolve(__dirname, 'pages/car/index.html'),
            },
        },
    },
})