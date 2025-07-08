/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: 'export',
    images: {
        unoptimized: true, // change to false when deploying
    }
    }
    
    module.exports = nextConfig