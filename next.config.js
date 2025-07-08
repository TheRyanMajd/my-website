/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: 'export',
    images: {
        unoptimized: false, // change to false when deploying
    }
    }
    
    module.exports = nextConfig