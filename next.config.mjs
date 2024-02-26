/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        port: "",
        pathname: "/images/**",
        // the name after www.thecocktaildb.com in the URl
        //: The pathname pattern for the remote images. Here,
        // it's set to /images/**, indicating that any image URL under
        //images/ on www.thecocktaildb.com should be considered a remote image.
      },
    ],
  },
};

export default nextConfig;
