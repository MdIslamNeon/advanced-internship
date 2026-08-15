import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // next/image only loads images from hosts listed here.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/summaristt.appspot.com/o/**",
        // `search` is left out on purpose so any ?alt=media&token=... is allowed.
      },
    ],
  },
};

export default nextConfig;
