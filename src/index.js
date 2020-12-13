import cipher from './cipher.js';

//function getData()
//let texto = document.getElementById("nombre").value;
//let recorrido = document.getElementById("posiciones").value;

console.log(cipher.encode("ALICIA FLORES", 11));

let num=document.getElementById("posiciones").value;
let texto=document.getElementById("nombre").value;
let textoCifrado=cipher.encode(texto, num);


let botonCifrar=document.getElementById("boton1")
botonCifrar.addEventListener("click", miFuncion)

console.log("ALICIA FLORES", 10)
function miFuncion() {
 document.getElementById("nombre2").innerHTML=textoCifrado
}

//import decipher from './cipher.js';

//console.log(decipher.decode("ALICIA FLORES", 15));

    //function getData() {
    //const num=document.getElementById("positionc").value;
    //const texto=document.getElementById("mensajec").value;
   // console.log(texto+" "+num);
   //}
 