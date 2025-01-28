function runBacktest() {
    let historicalData = [
        { price: 100, signal: "BUY" },
        { price: 105, signal: "SELL" },
        { price: 98, signal: "BUY" },
        { price: 102, signal: "SELL" }
    ];
    
    let profit = 0;
    let openTrade = null;
    
    historicalData.forEach(data => {
        if (data.signal === "BUY" && openTrade === null) {
            openTrade = data.price;
        } else if (data.signal === "SELL" && openTrade !== null) {
            profit += data.price - openTrade;
            openTrade = null;
        }
    });
    
    console.log("Strategy Profit:", profit);
    document.getElementById("output").innerText = "Total Profit: " + profit;
}
