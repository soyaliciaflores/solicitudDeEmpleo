import cipher from './cipher.js';

// Test case
console.log(cipher.encode("ALICIA FLORES", 11));



document.getElementById("boton1").addEventListener("click", function() {
    const num = document.getElementById("posiciones").value;
    const texto = document.getElementById("nombre").value;

    
    document.getElementById("nombre2").innerHTML = cipher.encode(texto, num);
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
 