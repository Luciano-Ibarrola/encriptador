const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("copiar");
const botonLimpiar = document.getElementById("limpiar");

botonEncriptar.onclick = function () {
  let resultado = "";
  let frase = document.querySelector("#text").value;
  let fraseMinuscula = frase.toLowerCase()
  document.querySelector("#resultado").innerHTML = "";
  for (let i = 0; i < fraseMinuscula.length; i++) {
    if (fraseMinuscula.charAt(i) === "a") {
      resultado += "ai";
    } else if (fraseMinuscula.charAt(i) === "e") {
      resultado += "enter";
    } else if (fraseMinuscula.charAt(i) === "i") {
      resultado += "imes";
    } else if (fraseMinuscula.charAt(i) === "o") {
      resultado += "ober";
    } else if (fraseMinuscula.charAt(i) === "u") {
      resultado += "ufat";
    } else {
      resultado += fraseMinuscula.charAt(i);
    }
  }
  document.querySelector("#resultado").innerHTML += resultado;
};

botonDesencriptar.onclick = function () {
  let frase = document.querySelector("#text").value;
  let fraseMinuscula = frase.toLowerCase();
  document.querySelector("#resultado").innerHTML = "";
  for (let i = 0; i < fraseMinuscula.length; i++) {
    if (fraseMinuscula.charAt(i) == "e") {
      fraseMinuscula = fraseMinuscula.replace(/enter/g, "e");
    } else if (fraseMinuscula.charAt(i) == "o") {
      fraseMinuscula = fraseMinuscula.replace(/ober/g, "o");
    } else if (fraseMinuscula.charAt(i) == "u") {
      fraseMinuscula = fraseMinuscula.replace(/ufat/g, "u");
    } else if (fraseMinuscula.charAt(i) == "i") {
      fraseMinuscula = fraseMinuscula.replace(/imes/g, "i");
    } else if (fraseMinuscula.charAt(i) == "a") {
      fraseMinuscula = fraseMinuscula.replace(/ai/g, "a");
    }
  }
  document.querySelector("#resultado").innerHTML += fraseMinuscula;
};

botonCopiar.onclick = function () {
  navigator.clipboard.writeText(document.querySelector("#resultado").value);
};

botonLimpiar.onclick = function () {
  let inputUsuario = document.querySelector("#text");
  inputUsuario.value = "";
  document.querySelector("#resultado").innerHTML = "";
};

function pulsar(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    var boton = document.getElementById("encriptar");
    angular.element(boton).triggerHandler("click");
  }
}
