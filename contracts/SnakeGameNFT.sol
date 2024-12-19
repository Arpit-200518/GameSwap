// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SnakeGameNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    address public developer;
    uint256 public royaltyPercentage; // Royalty percentage (e.g., 5%)

    // Events
    event NFTMinted(uint256 tokenId, address owner, string tokenURI);

    constructor(
        string memory name,
        string memory symbol,
        address _developer,
        uint256 _royaltyPercentage
    ) ERC721(name, symbol) Ownable(msg.sender) {
        tokenCounter = 0;
        developer = _developer;
        royaltyPercentage = _royaltyPercentage;
    }

    // Mint a new NFT
    function mintGameNFT(string memory tokenURI) public onlyOwner {
        uint256 tokenId = tokenCounter;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        tokenCounter++;
        emit NFTMinted(tokenId, msg.sender, tokenURI);
    }

    // Secondary sale royalty implementation
    function royaltyInfo(uint256 _salePrice) public view returns (uint256) {
        return (_salePrice * royaltyPercentage) / 100;
    }

    // Transfer NFT with royalties
    function transferWithRoyalty(address from, address to, uint256 tokenId, uint256 salePrice) public {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can transfer the NFT");

        uint256 royalty = royaltyInfo(salePrice);
        payable(developer).transfer(royalty); // Send royalty to the developer
        payable(from).transfer(salePrice - royalty); // Send remaining amount to the seller

        _transfer(from, to, tokenId);
    }

    // Custom safeMint function
    function safeMint(address to, string memory tokenURI) public onlyOwner {
        uint256 tokenId = tokenCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        tokenCounter++;
    }
}
