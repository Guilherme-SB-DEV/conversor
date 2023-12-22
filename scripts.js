
const select = document.getElementById("currency-select")
const button = document.getElementById('convert-button');
const dolar = 5;
const euro = 6.1
const convertValues = () => {
    const inputReais = document.getElementById('valor-nao-convertido').value;
    const valorEmReal = document.getElementById('real-value');
    const convertValue = document.getElementById('convert-value');
    valorEmReal.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(inputReais)
    if (inputReais > 0) {
        if (select.value === "U$ dolar americano") {
            convertValue.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", }).format(inputReais / dolar)
        }
        if (select.value === "Є Euro") {
            convertValue.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", }).format(inputReais / euro)
        }
    }
}
changeCurrency = () => {
    const currencyName = document.getElementById("currency-final")
    if (select.value === "Є Euro") {
        currencyName.innerHTML = "Euro"
    }
    if (select.value === "U$ dolar americano"){ 
        currencyName.innerHTML = "Dolar Americano"
    }
    convertValues()
}
button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)