// const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("NFTMarketplace", function () {
//   async function deployNFTMarketplaceFixture() {
//     // Contracts are deployed using the first signer/account by default
//     const [owner, platformFee] = await ethers.getSigners();
//     const DEFAULT_ADMIN = owner.address;
//     const CONTRACT_URI = "CONTRACT_URI";
//     const TRUSTED_FORWARDERS = [ethers.constants.AddressZero];
//     const PLATFORM_FEE_RECIPIENT = platformFee.address;
//     const PLATFORM_FEE_BPS = 300;

//     const WETH9 = await ethers.getContractFactory("WETH9");
//     const weth9 = await WETH9.deploy();

//     const NATIVE_TOKEN_WRAPPER = weth9.address;

//     const Marketplace = await ethers.getContractFactory("NFTMarketplace");
//     const marketplace = await Marketplace.deploy(NATIVE_TOKEN_WRAPPER);

//     return {
//       marketplace,
//       DEFAULT_ADMIN,
//       CONTRACT_URI,
//       TRUSTED_FORWARDERS,
//       PLATFORM_FEE_RECIPIENT,
//       PLATFORM_FEE_BPS,
//       NATIVE_TOKEN_WRAPPER,
//       owner,
//     };
//   }

//   describe("Deployment", function () {
//     it("Should initialize correctly", async function () {
//       const {
//         marketplace,
//         DEFAULT_ADMIN,
//         CONTRACT_URI,
//         PLATFORM_FEE_RECIPIENT,
//         PLATFORM_FEE_BPS,
//       } = await loadFixture(deployNFTMarketplaceFixture);

//       const defaultAdmin = await marketplace.DEFAULT_ADMIN_ROLE();
//       const contractURI = await marketplace.contractURI();
//       const platformFeeInfo = await marketplace.getPlatformFeeInfo();

//       expect(defaultAdmin).to.equal(DEFAULT_ADMIN);
//       expect(contractURI).to.equal(CONTRACT_URI);
//       expect(platformFeeInfo).to.equal(
//         (PLATFORM_FEE_RECIPIENT, PLATFORM_FEE_BPS)
//       );
//     });
//   });
// });
