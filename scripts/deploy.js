const { ethers, upgrades } = require("hardhat")

async function main() {
    const Box = await ethers.getContract("Box")
    console.log("Deploying Box, ProxyAdmin, Proxy...")
    const proxy = await upgrades.deployProxy(Box, [42], { initializer: "store" })
    console.log("Proxy of Box deployed to:", proxy.address)
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
