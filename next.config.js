/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    basePath: '/LumiMind-Haven',
    assetPrefix: '/LumiMind-Haven/',
};

export default nextConfig;
