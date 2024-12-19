## GameSwap: Decentralized Marketplace for Reselling Digital Games
#Introduction
GameSwap revolutionizes digital game ownership by enabling players to securely and transparently resell their purchased games without sharing personal accounts or identity. Leveraging blockchain technology, GameSwap creates a sustainable and decentralized gaming ecosystem where players can trade their digital assets seamlessly while respecting the rights of game developers through royalties.

# Features
1. Decentralized Game Ownership
Each purchased game is represented as a Non-Fungible Token (NFT) tied to encrypted game files stored on a decentralized network.

2. Reselling Without Sharing Accounts
Buyers receive decryption keys upon purchase, ensuring the game is playable without the need for the seller's personal account details.

3. Developer Royalties
Smart contracts automate royalty distribution for secondary sales, ensuring developers are fairly compensated.

4. Privacy & Security
Transactions are pseudonymous, and optional decentralized identity (DID) integration ensures secure authentication.

5. Interoperability
Built on Ethereum or Polygon for lower fees and faster transactions, the platform supports seamless integration with wallets like MetaMask.

# Problem Statement
In traditional digital game marketplaces:

1. Players cannot resell games due to restrictive licensing.
2. Game developers miss opportunities for ongoing revenue through secondary sales.
3. Buyers face security risks when sharing accounts to transfer games.
4. GameSwap addresses these problems by introducing a decentralized, NFT-based marketplace.

# How It Works
1. Game Files as NFTs:
Game files are uploaded and encrypted using decentralized storage platforms like IPFS or Arweave. Metadata and ownership are represented as ERC-721 or ERC-1155 tokens.

2. Smart Contract Implementation:
A Solidity-based contract manages game ownership, royalties, and transfers. Royalties are automatically deducted and sent to developers on every resale.

3. Buyer Authority:
The buyer has complete control over the purchased NFT, including the ability to resell or transfer it to others.

4. Game Access:
Upon purchase, the buyer receives decryption keys to access the game files securely.

# Tech Stack
1. Blockchain: Ethereum, Polygon (for scalability and lower fees)
2. Smart Contracts: Solidity, OpenZeppelin libraries
3. NFT Standards: ERC-721, ERC-1155
4. Storage: IPFS, Arweave for decentralized hosting of game files
5. Backend: Node.js
6. Wallets: MetaMask
7. Payments: Stablecoins (USDC), ETH for marketplace transactions
8. Testing: Hardhat for contract testing and deployment
9. APIs: Ethers.js

# Benefits
1. For Players: Freedom to resell games, ensuring true ownership.
2. For Developers: A consistent revenue stream through royalties on resales.
3. For the Industry: Promotes a fair, transparent, and sustainable ecosystem.

# Future Plans
1. Expanding platform interoperability with additional blockchains.
2. Introducing in-game assets as NFTs for further monetization.
3. Gamifying the marketplace experience to reward user participation.

# How to run the code
We have tested it on local host, hence to run it locally, run npx handhat node in one terminal, and in other terminal do the following in contracts folder:
1. To compile Smart Comtract:
   npx hardhat compile
2. To deploy the contract:
   npx hardhat run scripts/deploy.js --network localhost
3. To mint an NFT:
   npx hardhat run scripts/mint.js --network localhost
4. To transfer an NFT:
   npx hardhat run scripts/transfer.js --network localhost

After deploying, the address of smart contract changes and hence we need to change out mint.js and transfer.js files accordingly.
