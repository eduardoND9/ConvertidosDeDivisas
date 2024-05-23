const MontoConvertir=document.getElementById('montoConvertir');
const Cambio=document.getElementById('tazaDeCambio');

// const formulario = document.getElementById('formConvertir');

const tCambio=Cambio.textContent;

const Resultado =document.getElementById('resultadoD');

const botonConvertir=document.getElementById('convertir');

let currencyData = null;


function convertir(event) {
    let montoConvertir = parseFloat(MontoConvertir.value);
    let tipoCambio = parseFloat(currencyTaza);


    if (montoConvertir) {
        Resultado.textContent = threeDecimals(montoConvertir*tipoCambio);
        console.log("tipooo",tipoCambio);
        console.log("montoC",montoConvertir);
        console.log("reee",Resultado);
    } else {
        Resultado.textContent = '';
    }
    

}

function threeDecimals(n) {
    const h = +('1'.padEnd(3 + 1, '0')) // 10 or 100 or 1000 or etc
    return Math.round(n * h) / h
}

botonConvertir.addEventListener('click', convertir);
MontoConvertir.addEventListener('keyup', convertir);    
// formulario.addEventListener('submit', convertir);





addEventListener("load", async () => {
    const llamadaApi = await fetch("https://api.currencyapi.com/v3/currencies?apikey=cur_live_MuWzheWKsp04uUC8OB0uSwLzZPjqiNR941tm85Ki&currencies=")
    
    const respuesta = await llamadaApi.json();
    currencyData = respuesta.data;
    // console.log("prueba",currencyData);
    const monedas = Object.keys(currencyData);

  
    var selectM1 = document.getElementById("monedaUno");
    var selectM2 = document.getElementById("monedaDos");

    monedas.forEach((valor) => {
        var opcionElemento = document.createElement('option');
        opcionElemento.value = valor;
        opcionElemento.textContent = valor;
        
        selectM1.appendChild(opcionElemento);


        var opcionElemento2 = document.createElement('option');
        opcionElemento2.value = valor;
        opcionElemento2.textContent = valor;

        selectM2.appendChild(opcionElemento2);

    });
   

    selectM1.value = 'EUR';
    selectM2.value = 'USD';

    tazaDeCambio();

});





const selectUno = document.getElementById('monedaUno');
const selectDos = document.getElementById('monedaDos');
const TazaDeCambio = document.getElementById('tazaDeCambio');

let urlBase = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_MuWzheWKsp04uUC8OB0uSwLzZPjqiNR941tm85Ki&currencies=opcion1&base_currency=opcion2';

selectUno.addEventListener('change', tazaDeCambio,);
selectDos.addEventListener('change', tazaDeCambio,);





let currencyTaza;
async function tazaDeCambio() {

    const valorSelectUno = selectUno.value;
    const valorSelectDos = selectDos.value;
    
    let nuevaURL = urlBase;

    nuevaURL = nuevaURL.replace('opcion1', valorSelectDos);
    nuevaURL = nuevaURL.replace('opcion2', valorSelectUno);


    try {
        const respuesta = await fetch(nuevaURL);
        const datos = await respuesta.json();
        currencyTaza=datos.data[valorSelectDos].value;
        TazaDeCambio.textContent = currencyTaza;
        
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        TazaDeCambio.textContent = 'Error al obtener los datos de la API';
    }
    convertir();

}










