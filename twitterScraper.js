const axios = require("axios")

const accounts = [
 "elonmusk",
 "WatcherGuru",
 "tier10k"
]

async function scanX(){

 const tweets = []

 for(const acc of accounts){

   const res = await axios.get(`https://api.socialdata.tools/twitter/${acc}`)

   tweets.push(...res.data)

 }

 return tweets.map(t => t.text)

}

module.exports = scanX
