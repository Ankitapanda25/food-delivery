/** @type {import('next').NextConfig} */
const nextConfig = {
    
        reactStrictMode: false,
        async redirects() {
                return [
                  {
                    source: '/login',
                    destination: '/',
                    permanent: true,
                  },
                ]
              },
            
      
    
};


       

export default nextConfig;
