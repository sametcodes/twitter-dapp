const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("Twitter");
  const contract = await Contract.deploy();
  await contract.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
