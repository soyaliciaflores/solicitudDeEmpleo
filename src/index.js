import cipher from './cipher.js';

// Test case
console.log(cipher.encode("ALICIA FLORES", 11));



document.getElementById("boton1").addEventListener("click", function() {
    const num = document.getElementById("posiciones").value;
    const texto = document.getElementById("nombre").value;

    document.getElementById("nombre2").innerHTML = cipher.encode(texto, num);
    document.getElementById("edad2").innerHTML=document.getElementById("edad").value;
    document.getElementById("nacimiento2").innerHTML=document.getElementById("nacimiento").value;
    document.getElementById("puesto2").innerHTML=document.getElementById("puesto").value;
    document.getElementById("sueldo2").innerHTML=document.getElementById("sueldo").value;
    document.getElementById("direccion2").innerHTML=document.getElementById("direccion").value;
    document.getElementById("email2").innerHTML=document.getElementById("email").value;
    document.getElementById("celular2").innerHTML=document.getElementById("celular").value;
    document.getElementById("escolaridad2").innerHTML=document.getElementById("escolaridad").value;
    document.getElementById("idiomas2").innerHTML=document.getElementById("idiomas").value;
    document.getElementById("habilidades2").innerHTML=document.getElementById("habilidades").value;
    document.getElementById("experiencia2").innerHTML=document.getElementById("experiencia").value;
    document.getElementById("comentarios2").innerHTML=document.getElementById("comentarios").value;
});


//if (texto.length < 1) {
    //alert('Por favor escriba un nombre');
    //return false;
//}


//import decipher from './cipher.js';

//console.log(decipher.decode("ALICIA FLORES", 15));

    //function getData() {
    //const num=document.getElementById("positionc").value;
    //const texto=document.getElementById("mensajec").value;
   // console.log(texto+" "+num);
   //}
 