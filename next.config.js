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
    // Disable dynamic routes in production
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/dashboard': { page: '/dashboard' },
            '/recordings': { page: '/recordings' },
            '/schedule': { page: '/schedule' },
            // Pre-render some meeting pages
            ...Array.from({ length: 20 }, (_, i) => ({
                [`/meeting/meeting-${i + 1}`]: {
                    page: '/meeting/[id]',
                    query: { id: `meeting-${i + 1}` }
                }
            })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
        };
    }
};

export default nextConfig;
