This project demonstrates a NFT marketplace smart contract.
Users can sell ERC 721 or ERC1155 tokens at a fixed price (Direct Listing) or auction then (Auction Listing)

- Direct Listing:
  An NFT owner (or 'lister') can list their NFTs for sale at a fixed price. A potential buyer can buy the NFT for the specified price, or make an offer to buy the listed NFTs for a different price or currency, which the lister can choose to accept.

- Auction Listing:
  An NFT owner (or 'lister') can auction their NFTs. Potential buyers make bids in the auction. At the closing of the auction, the buyer with the wining bid gets the auctioned NFTs, and the lister gets the winning bid amount. The auctions are English auctions

- Main difference in treatment: Direct vs Auction listings
  Direct listings are low commitment, high frequency listings; people constantly list and de-list their NFTs based on market trends. So, the listed NFTs and offer amounts are not escrowed in the Marketplace to keep the seller's NFTs and the buyer's currency liquid. Allowing users to list NFTs for sale just by approvals gives them the freedom to list the same NFT in multiple marketplaces, e.g. this Marketplace contract, OpenSea, etc. at the same time.
  Auction listings are high commitment, low frequency listings. The seller and bidders respect the auction window, recognize that their NFTs / bid amounts will be illiquid for the auction duration, and expect a guaranteed payout at auction closing — the auctioned items for the bidder, and the winning bid amount for the seller. So, tokens listed for sale in an auction, and the highest bid at any given moment are escrowed in the market.
