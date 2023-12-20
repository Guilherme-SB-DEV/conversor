
const button = document.getElementById('convert-button');
const dolar = 5;
const convertValues = () => {
    const inputReais = document.getElementById('valor-nao-convertido').value;
    const valorEmReal = document.getElementById('real-value');
    const valorEmDolar = document.getElementById('dolar-value');
    if(inputReais>0){
        valorEmReal.innerHTML = inputReais
        valorEmDolar.innerHTML = inputReais/dolar; 

    }
}

button.addEventListener('click', convertValues);