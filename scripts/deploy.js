const hre = require("hardhat");
const { ethers } = require("hardhat");
const { nativeTokenWrapper } = require("../utils/nativeTokenWrapper");

async function main() {
  const chainId = hre.network.config.chainId;
  //const [caller] = await ethers.getSigners();
  const nativeTokenWrapperAddress = nativeTokenWrapper[chainId];

  const marketplace = await ethers
    .getContractFactory("NFTMarketplace")
    .then((f) => f.deploy(nativeTokenWrapperAddress));

  console.log(
    "Deploying Marketplace \ntransaction: ",
    marketplace.deployTransaction.hash,
    "\naddress: ",
    marketplace.address
  );

  await marketplace.deployed();
  await marketplace.deployTransaction.wait(5);
  console.log("\n");

  console.log("Verifying contract...");
  await verify(marketplace.address, [nativeTokenWrapperAddress]);
  console.log("Verifying contract successfully");
}

async function verify(address, args) {
  try {
    return await hre.run("verify:verify", {
      address: address,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(address, args, e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
