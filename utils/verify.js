const { run, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract....")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constractorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        }
        console.log(e)
    }
}

module.exports = {
    verify,
}
