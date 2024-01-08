/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
    ],
  },
  compiler: {
    styledComponents: {
      ssr: true,
      pure: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/feed",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
