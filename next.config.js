/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'bostami-next.vercel.app'],
    },
    basePath: '/dsagredog',
    assetPrefix: '/dsagredog',
};

module.exports = nextConfig;
