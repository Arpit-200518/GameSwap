const hre = require("hardhat");

async function main() {
  // Import the ABI from the compiled contract artifacts
  const contractABI = require("../../artifacts/contracts/SnakeGameNFT.sol/SnakeGameNFT.json").abi;

  // Replace this with your deployed contract address
  const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  // Connect to the deployed contract using the ABI and contract address
  const [deployer] = await hre.ethers.getSigners(); // Get deployer's signer
  const nftContract = new ethers.Contract(contractAddress, contractABI, deployer);

  // Replace with the wallet address of the NFT recipient
  const recipient = "0xC3615C6Bfb47bcf2990bE6F986D26C41b8C14Ec8";

  // Replace with the CID of your metadata JSON on Pinata
  const metadataCID = "ipfs://bafkreiclfbqfl4anc73syv7bdkdk7njbq7tgtzdsmgnmxdcrrgzrh7nzue";

  console.log("Minting NFT...");

  // Call the safeMint function
  const tx = await nftContract.safeMint(recipient, metadataCID);
  await tx.wait();

  console.log("NFT minted successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
