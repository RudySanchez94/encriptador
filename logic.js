'use strict'

//ocultamos el textatera que mostrara el resultado
document.getElementById("resultado").style.display="none";
//ocultamos el boton copiar
document.getElementById("btn-copiar").style.display="none";
//creamos funcion para poder encriptar el texto ingresado
function encriptar(){
    //creando variable que capturara el valor de textarea 
    var texto = document.getElementById("texto").value;
    //validando si el textarea esta vacio
    if(texto == ""){
        //si el textarea esta vacio que muestre una alert
        alert("ingrese un texto");
    }else{
        //con el metodo replace cambiaremos las vocales por un texto diferente para que se muestre encriptado
        var textoEncriptado = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        //veremos en consola si capturamos el texto plano y si lo encriptamos
        console.log(texto, "\n",textoEncriptado);
        //mostraremos el texto encriptado en textarea resultado
        //para ello utilizamos innerHTml
        document.getElementById("resultado").innerHTML=textoEncriptado;
        //con las siguientes lineas de codigo haremos que los elementos
        //al principio de visualicen de manera normal
        document.getElementById("resultado").style.display="inline";
        document.getElementById("btn-copiar").style.display="inline";

        document.getElementById("dibujo").style.display="none";
    }
}
//practicamente la funciona para desencriptar es la misma solo se cambian los valores a reemplazar
function desencriptar(){
    //creando variable que capturara el valor de textarea 
    var texto = document.getElementById("texto").value;
    //validando si el textarea esta vacio
    if(texto == ""){
        //si el textarea esta vacio que muestre una alert
        alert("ingrese un texto");
    }else{
        //con el metodo replace cambiaremos las vocales por un texto diferente para que se muestre encriptado
        var textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        //veremos en consola si capturamos el texto plano y si lo encriptamos
        console.log(texto, textoDesencriptado);
        //mostraremos el texto encriptado en textarea resultado
        //para ello utilizamos innerHTml
        document.getElementById("resultado").innerHTML=textoDesencriptado;
        //con las siguientes lineas de codigo haremos que los elementos
        //al principio de visualicen de manera normal
        document.getElementById("resultado").style.display="inline";
        document.getElementById("btn-copiar").style.display="inline";

        document.getElementById("dibujo").style.display="none";
    }
}

//crearemos la funcion para asignarle al boton copiar
function copiarTexto(){
    var copiar = document.getElementById("resultado");
    navigator.clipboard.writeText(copiar.innerHTML);
}
