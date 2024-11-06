// next.config.mjs
import { resolve } from 'path';

const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      // Polyfill Node.js built-in modules for the client-side
      config.resolve.fallback = {
        crypto: resolve('crypto-browserify'),
        stream: resolve('stream-browserify'),
        buffer: resolve('buffer/'),
        os: resolve('os-browserify/browser'),
        path: resolve('path-browserify'),
        fs: false,
        util: resolve('util/'),
      };

      // Add `babel-loader` for polyfilling and ensuring compatibility
      config.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });
    }

    return config;
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: false,  
  
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https', 
//           hostname: 'utfs.io',
//           port: '', 
//           pathname: '/**',
//         },
//         {
//           protocol: 'https', 
//           hostname: 'lh3.googleusercontent.com',
//           port: '', 
//           pathname: '/**',
//         },
        
//       ],
//     },
// };

// export default nextConfig;

 