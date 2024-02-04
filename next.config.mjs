/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'github.com'
      },
      {
        hostname: 'count.getloli.com'
      }
    ]
  }
};

export default nextConfig;
