/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    typescript: {
      ignoreBuildErrors: true
    },
    eslint: {
      ignoreDuringBuilds: true
    },
  
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
};

export default nextConfig;

 