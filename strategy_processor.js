try {
    if (!strategyCode.trim()) {
        document.getElementById("output").innerText = "Error: No strategy code provided.";
        return;
    }
    
    let script = document.createElement("script");
    script.textContent = strategyCode;
    document.body.appendChild(script);
    
    if (typeof runBacktest === "function") {
        runBacktest();
    } else {
        document.getElementById("output").innerText = "Error: runBacktest function is not defined in the strategy.";
    }
} catch (error) {
    document.getElementById("output").innerText = "Error executing strategy: " + error;
}
