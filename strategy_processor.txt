document.getElementById("runTest").addEventListener("click", function () {
    let selectedStrategy = document.getElementById("strategySelector").value;
    
    fetch(selectedStrategy)
        .then(response => response.text())
        .then(code => {
            eval(code);  // Execute the loaded strategy
            runBacktest();  // Function defined inside the strategy file
        })
        .catch(error => console.error("Error loading strategy:", error));
});
