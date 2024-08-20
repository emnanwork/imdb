// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           hostname: 'images.tmdb.org',
//         },
//       ],
//     },
//   }

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//         domains: ['images.tmdb.org'],
//     }
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [
        'images.tmdb.org',
        'www.js-craft.io'
      ],
  },
  env: {
    customKey: process.env.API_KEY, // pulls from .env file
  },
}

module.exports = nextConfig
