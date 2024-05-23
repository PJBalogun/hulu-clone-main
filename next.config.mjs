/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
            port: '',
          },{
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
           
          }
        ],
      },
};

export default nextConfig;



