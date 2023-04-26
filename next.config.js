/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    //domains: ['localhost'],
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: '/dsagredo',
};

module.exports = nextConfig;
