fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log("Got the data!")
        console.log(data);
        displayOutput(data)     
     });
    
let displaycurrency = [
            "USD",
            "AUD",
            "GBP",
            "BRL",
]
    
function displayOutput(data) {     
    let chart = document.querySelector(".BarChart");    
    chart.innerHTML = '';
    chart.innerHTML += `
    <div class="BarChart-bar" style="height: ${1 * 20}%">
        EUR<br>
        1.00
    </div>
    `;
    for (let currency of displaycurrency) {
        let rate = data.rates[currency]
        console.log(rate)
        chart.innerHTML += `
            <div class="BarChart-bar" style="height: ${rate * 20}%">
                ${currency}<br>
                ${rate}
            </div>
    `; 
    }
}
