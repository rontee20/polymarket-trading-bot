function detectSignal(text){

 const signals = [
  "approved",
  "etf",
  "bankruptcy",
  "election",
  "launch",
  "ban"
 ]

 return signals.some(s => text.toLowerCase().includes(s))

}

module.exports = detectSignal
