/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: '/dsagredo',
    basePath: '/dsagredo',
};

module.exports = nextConfig;