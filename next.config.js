/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    // XÓA DÒNG output: "export" HOẶC ĐỂ THÀNH "standalone"
    // output: "export", ❌
    output: "standalone", // ✅ Sử dụng chế độ server runtime
};

export default nextConfig;
