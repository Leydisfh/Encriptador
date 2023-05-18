//Variable del campo de texto
let entradaTexto = document.querySelector("#entrada_texto")
//Variable de el boton encripatr
let btnEncriptar = document.querySelector(`#btn_encriptar`);
// Variable del campo de respuesta
let respuesta = document.querySelector("#respuesta");


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


btnEncriptar.addEventListener("click", encriptando);

function encriptando(){
    let encriptandoTexto = encriptar(entradaTexto.value);
    respuesta.textContent = encriptandoTexto;
    entradaTexto.value = "";
}


//Funcion para encriptar los mensjes 
function encriptar (stringEncriptado){
    // Array de las letras que deben de ser modificadas
    let codigoArray = [["e","enter"], ["i","imes"],["a","ai"], ["0","ober"], ["u", "ufat"]];
    //devolviendo el mensaje en minuscula
    stringEncriptado = stringEncriptado.toLowerCase();
//Condicional para reemplazar las letras
for(let i = 0; i< codigoArray.length; i++ ){
    if(stringEncriptado.includes(codigoArray[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(codigoArray[i][0], codigoArray[i[1]])
    }
}
return stringEncriptado
}





