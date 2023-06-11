/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/images/4jrmtdjg/production/**',
            }
        ]
    },
    output: 'export',
}

module.exports = nextConfig
