/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com"
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos'
          }
        ],
      },
      typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
