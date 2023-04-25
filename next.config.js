/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    basePath: '/dsagredog',
    assetPrefix: '/dsagredog',
};

module.exports = nextConfig;
