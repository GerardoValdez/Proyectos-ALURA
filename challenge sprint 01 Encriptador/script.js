/*e = enter;
o = ober;
i = imes;
a = ai;
u = ufat;*/

const inputMensaje = document.querySelector("#input");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const btnEscuchar = document.querySelector("#btn-escuchar");
const munieco = document.getElementById("munieco");
const texto = document.getElementById("texto");

function encriptar(){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("o", "ober")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    inputResultado.value = mensajeEncriptado;
    mostrarOcultar();
    inputMensaje.value = "";
}

function mostrarOcultar(){
    munieco.style.display="none";
    texto.style.display="none";    
}

function desencriptar(){
    var mensajeEncriptado = inputResultado.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("ober", "o")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputResultado.value = mensaje;
    inputMensaje.value = "";
}

function copiar(){
    var mensajeCopiado = inputResultado.value;
    navigator.clipboard.writeText(mensajeCopiado);//metodo especifico para darle al clipboard un texto
}

function escuchar(){
    var mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es";
    window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnEscuchar.onclick = escuchar;


