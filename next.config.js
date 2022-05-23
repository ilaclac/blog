/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    disableStaticImages: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [8, 16, 32, 48, 64, 96, 128, 256, 384, 512],
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/posts/page/1",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};
