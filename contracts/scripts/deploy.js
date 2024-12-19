const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // Get the deployer account
  console.log("Deploying contracts with the account:", deployer.address);

  // Compile the contract if not already compiled
  await hre.run("compile");

  // Deploy the SnakeGameNFT contract
  const SnakeGameNFT = await hre.ethers.getContractFactory("SnakeGameNFT");
  const snakeGameNFT = await SnakeGameNFT.deploy(
    "SnakeGameNFT", // Name
    "SGNFT", // Symbol
    deployer.address, // Replace with a valid address (e.g., your wallet)
    5 // Royalty percentage
  );

  await snakeGameNFT.deployed();

  console.log("SnakeGameNFT deployed to:", snakeGameNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
