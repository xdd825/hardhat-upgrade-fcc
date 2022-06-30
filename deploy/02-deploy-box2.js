const { network } = require("hardhat")
// const { developmentChains } = require("../hardhat-helper-config")
// const { verify } = require("../utils/verify")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const box = await deploy("BoxV2", {
        from: deployer,
        args: [],
        waitConfirmations: network.blockConfirmations || 1,
        // proxy: {
        //     proxyContract: "OpenZeppelinTransparentProxy",
        //     viaAdminContract: {
        //         name: "BoxProxyAdmin",
        //         artifact: "BoxProxyAdmin",
        //     },
        // },
    })

    // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    //     log("verifying...")
    //     await verify(box.address, [])
    // }
}
