/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // ✅ Hỗ trợ xuất tĩnh cho ảnh
    },
    reactStrictMode: true,
};

export default nextConfig;
