/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'bostami-next.vercel.app', 'chaoocharles.dev'],
    },
};

module.exports = nextConfig;
