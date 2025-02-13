import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    base: "/swerv/",
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080
    }
}