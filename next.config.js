/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    basePath: '/LumiMind-Haven',
    assetPrefix: '/LumiMind-Haven/',
    trailingSlash: true,
};

export default nextConfig;
