const axios = require("axios")

async function findMarket(keyword){

 const res = await axios.get("https://clob.polymarket.com/markets")

 const markets = res.data

 return markets.find(m => m.question.toLowerCase().includes(keyword))

}

module.exports = findMarket
