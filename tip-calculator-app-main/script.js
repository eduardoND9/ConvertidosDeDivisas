const valor=document.getElementById('valor');
const tDolar=document.getElementById('tDolar');
const tSol=document.getElementById('tSol');

// CREAR CONSTANTES DE LOS INPUTS DE RESULTADOS (SOLES Y DOLARES)
const Rdolar =document.getElementById('resultadoD');
const Rsol =document.getElementById('resultadoS');

const botonConvertir=document.getElementById('convertir');


function convertir() {
    
    let montoConvertir = parseFloat(valor.value);
    let tipoCambioDolar = parseFloat(tDolar.value);
    let tipoCambioSol = parseFloat(tSol.value);
    

 
    
    // REALIZAR EL CALCULO Y GUARDARLOS EN VARIABLES DE RESULTADOS
    Rdolar.value = (montoConvertir*tipoCambioDolar).toFixed(2);
    Rsol.value = (montoConvertir*tipoCambioSol).toFixed(2);

}

botonConvertir.addEventListener('click', convertir);



