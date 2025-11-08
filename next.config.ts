import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Статический экспорт для простого деплоя
  images: {
    unoptimized: true, // Для статического экспорта нужно отключить оптимизацию или использовать внешние CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tildacdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdnv.boomstream.com',
      },
    ],
  },
};

export default nextConfig;
