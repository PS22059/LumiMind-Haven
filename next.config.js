/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: "dist",
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    basePath: "//LumiMind-Haven",
};

export default nextConfig;
