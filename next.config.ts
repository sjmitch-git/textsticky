import type { NextConfig } from "next";

const withNextIntl = require('next-intl/plugin')();

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  images: {
    domains: ["public.blob.vercel-storage.com"],
  },
};

const config = withNextIntl(nextConfig);

module.exports = withPWA(config);
