import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the placeholder SVGs in /public/images to render via next/image.
    // Safe to remove once they're replaced with real .jpg/.png car photos.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
