const input1 = document.getElementById('hryvna');
const input2 = document.getElementById('dollars');
const btn = document.getElementById('btn');
const usd = document.getElementById('usd');
const welche = document.getElementById('vubor');

let dollar;
let euro;
let zloty;

const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;

fetch(url).then(response => response.json())
.then(data => {
    dollar = data.find(currency => currency.cc === "USD");
    console.log(`На ${dollar.exchangedate} курс доллара равняется: ${dollar.rate}`);
    document.getElementById('usd').textContent = dollar.rate;
    euro = data.find(currency => currency.cc === "EUR");
    console.log(`${euro.rate}`);
    document.getElementById('eur').textContent = euro.rate;
    zloty = data.find(currency => currency.cc === "PLN");
    console.log(`${zloty.rate}`);
    document.getElementById('pln').textContent = zloty.rate;
})
.catch(error => console.error('close: ' , error));


btn.onclick = function () { 
    if(vubor.value === "usd"){
    const res = input1.value / dollar.rate;
    const newres = res.toFixed(2); 
    console.log(newres); 
    document.getElementById('dollars').value = newres;
    } else if (vubor.value === "eur") {
        const res = input1.value / euro.rate;
        const newres = res.toFixed(2); 
        console.log(newres); 
        document.getElementById('dollars').value = newres;
    } else if (vubor.value === "pln") {
        const res = input1.value / zloty.rate;
        const newres = res.toFixed(2); 
        console.log(newres); 
        document.getElementById('dollars').value = newres;
    }
};

