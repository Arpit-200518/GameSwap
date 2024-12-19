const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Replace with your local deployed contract address
  const tokenId = 1; // Replace with the tokenId of the NFT you want to transfer
  const recipient = "0xC3615C6Bfb47bcf2990bE6F986D26C41b8C14Ec8"; // MetaMask address as recipient

  // Get the ABI and connect to the deployed contract
  const contractABI = require("../../artifacts/contracts/SnakeGameNFT.sol/SnakeGameNFT.json").abi;
  const [owner] = await ethers.getSigners(); // Use the deployer's wallet or another account with the NFT
  const nftContract = new ethers.Contract(contractAddress, contractABI, owner);

  

  // Transfer the NFT
  console.log(`Transferring NFT with Token ID ${tokenId} to ${recipient}...`);
  const tx = await nftContract["safeTransferFrom(address,address,uint256)"](
    owner.address,
    recipient,
    tokenId
  );
  await tx.wait();

  console.log(`NFT with Token ID ${tokenId} transferred to ${recipient}`);

  // Check the owner after transfer
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
