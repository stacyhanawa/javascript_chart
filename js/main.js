fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        findHighest(data);
        displayOutput(data);  
     });

let displaycurrency = [
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
    chart.innerHTML += `
    <div class="BarChart-bar" style="height: ${1/highest * 100}%">
        EUR<br>
        1.00
    </div>
    `;
    
    for (let currency of displaycurrency) {
        let rate = data.rates[currency]
        chart.innerHTML += `
            <div class="BarChart-bar" style="height: ${rate/highest * 100}%">
                ${currency}<br>
                ${rate}
            </div>
        `;
    }
}
