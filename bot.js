const getNews = require("./newsScraper")
const scanX = require("./twitterScraper")
const detectSignal = require("./aiClassifier")
const findMarket = require("./marketScanner")
const executeTrade = require("./trader")

async function run(){

 const news = await getNews()
 const tweets = await scanX()

 const content = [...news, ...tweets]

 for(const text of content){

   if(detectSignal(text)){

     const market = await findMarket(text)

     if(market){

       await executeTrade(market)

     }

   }

 }

}

setInterval(run, 20000)
