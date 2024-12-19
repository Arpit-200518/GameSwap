require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28", // Primary version required by your contracts
      },
      {
        version: "0.8.20", // Support for other dependencies
      },
    ],
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545", // Matches the Hardhat node you started
      chainId: 31337, // Hardhat's default chain ID
    },
  },
};
