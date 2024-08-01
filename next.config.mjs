/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wj1ikqzx8cny93qa.public.blob.vercel-storage.com',
                port: ''
            }
        ]
    }
};

export default nextConfig;
