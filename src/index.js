import cipher from './cipher.js';

// Test case
//console.log(cipher.encode("HOLA CHAVAS", 1));

let botonEnviar = document.getElementById("boton1");
botonEnviar.addEventListener("click", function() {
    const num = document.getElementById("posiciones").value;
    const num2 = parseInt(num);
    const texto = document.getElementById("nombre").value;
    document.getElementById("formularioCifrar").style.display = "none";
    document.getElementById("nombre2").innerHTML = cipher.encode(texto, num2);
   
    document.getElementById("puesto2").innerHTML=document.getElementById("puesto").value;
    document.getElementById("sueldo2").innerHTML=document.getElementById("sueldo").value;
    document.getElementById("escolaridad2").innerHTML=document.getElementById("escolaridad").value;
    document.getElementById("idiomas2").innerHTML=document.getElementById("idiomas").value;
    document.getElementById("habilidades2").innerHTML=document.getElementById("habilidades").value;
    document.getElementById("experiencia2").innerHTML=document.getElementById("experiencia").value;
    document.getElementById("comentarios2").innerHTML=document.getElementById("comentarios").value;
});

import decipher from './decipher.js';
// Test case
console.log(decipher.decode("BMJDJB IPMB", 1));
let botonEnviar2 = document.getElementById("boton2");
botonEnviar2.addEventListener("click", function() {
    const num3 = document.getElementById("posiciones2").value;
    const num4 = parseInt(num3);
    const texto1 = document.getElementById("nombre5").value;
    document.getElementById("nombre4").innerHTML = decipher.decode(texto1, num4);
    document.getElementById("celular2").innerHTML=document.getElementById("celular").value;
    document.getElementById("email2").innerHTML=document.getElementById("email").value;
});

