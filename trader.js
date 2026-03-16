const { ethers } = require("ethers")
const { PRIVATE_KEY, TRADE_SIZE } = require("./config")

const wallet = new ethers.Wallet(PRIVATE_KEY)

async function trade(opportunity, side){

 console.log("Executing trade")
 console.log(opportunity.question)

 console.log(`Buy ${side} size $${TRADE_SIZE}`)

}

module.exports = trade
