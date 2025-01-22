/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/it',  // Path you want to redirect from
        destination: 'https://www.aeapolimi.it',  // New destination URL
        permanent: true,  // Permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
