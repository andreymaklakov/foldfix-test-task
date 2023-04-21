/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      "s52lhdnekgzezod5ob2xlfpzhicodm6esmbkvlbzoe4xskamvvnq.arweave.net",
      "dl.airtable.com",
      "bafybeigjwxcpdg2opyppevq3epanfz7htuguatnj7l5admypgrz46cigim.ipfs.nftstorage.link",
      "shdw-drive.genesysgo.net",
      "datamancer.io",
    ],
  },
};

module.exports = nextConfig;
