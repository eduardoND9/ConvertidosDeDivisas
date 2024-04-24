const valor=document.getElementById('valor');
const tDolar=document.getElementById('tDolar');
const tSol=document.getElementById('tSol');

// CREAR CONSTANTES DE LOS INPUTS DE RESULTADOS (SOLES Y DOLARES)
const Rdolar =document.getElementById('resultadoD');
const Rsol =document.getElementById('resultadoS');

const botonConvertir=document.getElementById('convertir');

let currencyData = null;


function convertir() {
    // console.log('convertir currencyData', currencyData);
    let montoConvertir = parseFloat(valor.value);
    let tipoCambioDolar = parseFloat(tDolar.value);
    let tipoCambioSol = parseFloat(tSol.value);
    
    
    // REALIZAR EL CALCULO Y GUARDARLOS EN VARIABLES DE RESULTADOS
    // Rdolar.value = (montoConvertir*tipoCambioDolar).toFixed(3);
    // Rsol.value = (montoConvertir*tipoCambioSol).toFixed(3);

    Rdolar.textContent = threeDecimals(montoConvertir*tipoCambioDolar);
    Rsol.textContent = threeDecimals(montoConvertir*tipoCambioSol);
    

}

function threeDecimals(n) {
    const h = +('1'.padEnd(3 + 1, '0')) // 10 or 100 or 1000 or etc
    return Math.round(n * h) / h
}

botonConvertir.addEventListener('click', convertir);


addEventListener("load", async () => {
    const llamadaApi = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_MuWzheWKsp04uUC8OB0uSwLzZPjqiNR941tm85Ki&currencies=USD%2CPEN&base_currency=EUR")
    
    const respuesta = await llamadaApi.json();
    currencyData = respuesta.data;

    Nsol = currencyData.PEN.value.toFixed(3);
    Ndolar = currencyData.USD.value.toFixed(3);
    document.getElementById("tSol").value = Nsol;
    document.getElementById("tDolar").value = Ndolar;


});


