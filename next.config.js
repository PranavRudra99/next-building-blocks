/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/login',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
