# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```



To compile and run the smart contract:
    Open 2 terminals:
    1: npx hardhat node
    2: npx hardhat run scripts/deploy.js --network localhost
       npx hardhat console --network localhost

       In the terminal: Type line by line:
       // Get the contract
        const SnakeGameNFT = await ethers.getContractFactory("SnakeGameNFT");
        const contract = await SnakeGameNFT.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3"); 
        // In the place of 0x5FbDB2315678afecb367f032d93F642f64180aa3 write what comes after SnakeGameNFT deployed 
        // to: 

        // Mint an NFT  
        await contract.mintGameNFT("https://example.com/nft-metadata");

        // Check the total number of NFTs minted
        const total = await contract.tokenCounter();
        console.log("Total NFTs minted:", total.toString());


Shortcut:
1. To open Ternimal Ctrl + Shift + `


