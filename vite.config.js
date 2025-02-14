import { resolve } from 'path'
import path from 'node:path'

export default {
    base: "/swerv/",
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: path.resolve('index.html'),
                services: path.resolve('services.html')
            }
        }
    },
    server: {
        port: 8080
    }
}