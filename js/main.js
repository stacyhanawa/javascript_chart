fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log("Got the data!")
        console.log(data);
        displayOutput(data)     
     });
    
    
function displayOutput(data) {     
    let chart = document.querySelector(".BarChart");
    chart.innerHTML = '';
    chart.innerHTML += `
        <div class="BarChart-bar" style="height: ${100}%">
            EUR<br>
            1.00
        </div>
        <div class="BarChart-bar" style="height: ${data.rates.USD * 100}%">
            USD<br>
            ${data.rates.USD}
        </div>
        <div class="BarChart-bar" style="height: ${data.rates.AUD * 100}%">
            AUD<br>
            ${data.rates.AUD}
        </div>
        <div class="BarChart-bar" style="height: ${data.rates.GBP * 100}%">
            GBP<br>
            ${data.rates.GBP}
        </div>
        <div class="BarChart-bar" style="height: ${data.rates.BRL * 100}%">
            BRL<br>
            ${data.rates.BRL}
        </div>
    `;
}
