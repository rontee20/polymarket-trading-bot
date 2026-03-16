const axios = require("axios")

async function getNews(){

 const res = await axios.get("https://cryptopanic.com/api/v1/posts/?auth_token=demo")

 return res.data.results.map(n => n.title)

}

module.exports = getNews
