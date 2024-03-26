/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com"
          }
        ],
      },
      typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
