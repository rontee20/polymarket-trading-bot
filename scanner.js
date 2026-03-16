const axios = require("axios")
const { API } = require("./config")

async function scanMarkets(){

 const res = await axios.get(`${API}/markets`)
 const markets = res.data

 const opportunities = []

 markets.forEach(m => {

   if(!m.outcomes) return

   const yes = m.outcomes[0]?.price
   const no = m.outcomes[1]?.price

   if(yes && no && yes + no < 0.97){

     opportunities.push({
       question: m.question,
       market: m.id,
       yes,
       no
     })

   }

 })

 return opportunities

}

module.exports = scanMarkets
