import { resolve } from 'path'

export default {
    base: "/swerv/",
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: resolve('index.html'),
                services: resolve('services.html'),
                location: resolve('location.html'),
                contact: resolve('contact-us.html'),
                review: resolve('review.html'),
                select: resolve('booking/select.html'),
                experts: resolve('booking/experts.html'),
                info: resolve('booking/info.html'),
                confirm: resolve('booking/confirm.html'),
            }
        }
    },
    server: {
        port: 8080
    }
}