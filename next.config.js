/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mye-website.local", "mye-wordpress-dev.amihan.net"],
  },
};

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

module.exports = nextConfig;
