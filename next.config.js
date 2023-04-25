/** @type {import('next').NextConfig} */
const repo = 'dsagredog';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'imgix',
        path: 'the "domain" of your Imigix source',
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
};

module.exports = nextConfig;
