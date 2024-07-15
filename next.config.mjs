/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.coingecko.com/coins"
            },
            {
                protocol: "https",
                hostname: "coin-images.coingecko.com"
            }
        ]
    }
};

export default nextConfig;
