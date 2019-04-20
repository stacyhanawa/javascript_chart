function doFetch() {
    let selected = document.getElementsByClassName("CurrencyChooser-select")[0];
    let baseCurrency = selected.options[selected.selectedIndex].value;
    fetch("https://api.exchangeratesapi.io/latest?base=" +baseCurrency)
        .then(response => response.json())
        .then(data => {
            if (baseCurrency === "EUR") {
                data.rates.EUR=1.00
            }
            console.log(data);
            findHighest(data);
            displayOutput(data);  
         });
}

let displaycurrency = [
            "EUR",
            "USD",
            "AUD",
            "GBP",
            "BRL",
]
     
let highest = 0;

function findHighest(data){
    for (let currency of displaycurrency) {
        let rate = data.rates[currency]   
        if (rate > highest) {
        highest = rate;
        }
    }
}
    
function displayOutput(data) {     
    let chart = document.querySelector(".BarChart");    
    chart.innerHTML = '';  
    for (let currency of displaycurrency) {
        let rate = data.rates[currency].toFixed(2)
        chart.innerHTML += `
            <div class="BarChart-bar" style="height: ${rate/highest * 100}%">
                ${currency}<br>
                ${rate}
            </div>
        `;
    }
}

doFetch()
