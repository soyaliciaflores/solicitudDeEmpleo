const cipher = {
//AQUI EMPIEZA LA MAGIA
  encode:function (texto, num){
   let alphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   let mayus = texto.toUpperCase();
   let result=[]
   let espacio= " "
    
    for (let i=0;i<mayus.length;i++){ 
let indiceInicial= mayus.charAt(i);

if (indiceInicial===" "){
  result.push(espacio)
}
else{ 
result.push(alphabet[(alphabet.indexOf(indiceInicial)+num)%26])
      } 
    }
  return result.join("")
  }
  }

  
export default cipher; 









/* FUNCION PARA DESCIFRAR
const decipher = {
  //AQUI EMPIEZA LA MAGIA
    decode:function (texto, num){
      /*CIFRA*/ //let alphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
 /*   
      let alphabet= ["Z","Y","X","W","V","U","T","S","R","Q","P","O","N","M","L","K","J","I","H","G","F","E","D","C","B","A"];
      let result=[]
      let espacio= " "
  


      for (let i=0;i<texto.length;i++){ 
  let indiceInicial= texto.charAt(i);
  
  if (indiceInicial===" "){
    result.push(espacio)
  }
  else{ 
  result.push(alphabet[(alphabet.indexOf(indiceInicial)+num)%26])
        } 
      }
      return result.join("")
    }
    }
  export default decipher; 

  */