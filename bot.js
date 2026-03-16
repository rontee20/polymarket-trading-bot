const scanMarkets = require("./scanner")
const chooseTrade = require("./strategy")
const trade = require("./trader")

async function run(){

 console.log("Scanning markets...")

 const opportunities = await scanMarkets()

 for(const opp of opportunities){

   const side = chooseTrade(opp)

   if(side){

     await trade(opp, side)

   }

 }

}

setInterval(run, 15000)
