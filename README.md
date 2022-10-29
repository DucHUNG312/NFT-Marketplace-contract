This project demonstrates a NFT marketplace smart contract.
Users can sell ERC 721 or ERC1155 tokens at a fixed price (Direct Listing) or auction then (Auction Listing)

- Direct Listing:
  An NFT owner (or 'lister') can list their NFTs for sale at a fixed price. A potential buyer can buy the NFT for the specified price, or make an offer to buy the listed NFTs for a different price or currency, which the lister can choose to accept.

- Auction Listing:
  An NFT owner (or 'lister') can auction their NFTs. Potential buyers make bids in the auction. At the closing of the auction, the buyer with the wining bid gets the auctioned NFTs, and the lister gets the winning bid amount. The auctions are English auctions

Try running some of the following tasks to deploy contract:

```shell
yarn hardhat node
yarn hardhat run scripts/deploy.js
```
