//Variable del campo de texto
let entradaTexto = document.querySelector("#entrada_texto");
//Variable de el boton encripatr
let btnEncriptar = document.querySelector(`#btn_encriptar`);
// Variable del campo de respuesta
let respuesta = document.querySelector("#respuesta");
// Variable del boton desencriptar
let btnDesencriptar = document.querySelector("#btn_desencriptar");

respuesta.innerHTML = `<h3>Ningún mensaje fue encontrado</h3>
 <br> 
<p>Ingresa el texto que desees encriptar o desencriptar</p>`;


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

btnEncriptar.addEventListener("click", encriptando);

function encriptando() {
  /* let encriptandoTexto = encriptar(entradaTexto.value);
    respuesta.textContent = encriptandoTexto;
    entradaTexto.value = "";*/
  let textoEntrada = entradaTexto.value;

  // Validación de letras minúsculas sin caracteres especiales ni acentos
  if (/^[a-z\s]*$/.test(textoEntrada)) {
    let encriptandoTexto = encriptar(textoEntrada);
    respuesta.textContent = encriptandoTexto;
    entradaTexto.value = "";
  } else {
    alert(
      "El texto solo debe contener letras minúsculas sin caracteres especiales ni acentos."
    );
  }
}

//Funcion para encriptar los mensjes
function encriptar(stringEncriptado) {
  // Array de las letras que deben de ser modificadas
  let codigoArray = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["0", "ober"],
    ["u", "ufat"],
  ];
  //devolviendo el mensaje en minuscula
  stringEncriptado = stringEncriptado.toLowerCase();
  //Condicional para reemplazar las letras
  for (let i = 0; i < codigoArray.length; i++) {
    if (stringEncriptado.includes(codigoArray[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        codigoArray[i][0],
        codigoArray[i][1]
      );
    }
  }
  return stringEncriptado;
}

btnDesencriptar.addEventListener("click", desencriptando);

function desencriptando() {
  /* let encriptandoTexto = desencriptar(entradaTexto.value);
    respuesta.textContent = encriptandoTexto;
    entradaTexto.value = "";*/

  let textoEntrada = entradaTexto.value;

  // Validación de letras minúsculas sin caracteres especiales ni acentos
  if (/^[a-z\s]*$/.test(textoEntrada)) {
    let desencriptandoTexto = desencriptar(textoEntrada);
    respuesta.textContent = desencriptandoTexto;
    entradaTexto.value = "";
  } else {
    alert(
      "El texto solo debe contener letras minúsculas sin caracteres especiales ni acentos."
    );
  }
}

//Funcion para desencriptar

function desencriptar(stringDesencriptado) {
  let codigoArray = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["0", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < codigoArray.length; i++) {
    if (stringDesencriptado.includes(codigoArray[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        codigoArray[i][1],
        codigoArray[i][0]
      );
    }
  }
  return stringDesencriptado;
}

