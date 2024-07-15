/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de', 'fr', 'ru', 'uk', 'it', 'nl'],
    defaultLocale: 'en',
  },
}

export default nextConfig
