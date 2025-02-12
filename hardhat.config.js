require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ARBITRUM_SEPOLIA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
