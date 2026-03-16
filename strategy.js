function chooseTrade(opportunity){

 if(opportunity.yes < 0.40){
   return "YES"
 }

 if(opportunity.no < 0.40){
   return "NO"
 }

 return null

}

module.exports = chooseTrade
