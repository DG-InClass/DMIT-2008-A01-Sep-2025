const path = require('path'); // This is the CommonJS way of "importing"
// import { path } from 'path'; // This is ESM/ES6 of doing importing


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // __dirname is a Global Variable that helps identify the root
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
