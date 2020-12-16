//FUNCION PARA DESCIFRAR
const decipher = {
  //AQUI EMPIEZA LA MAGIA
    decode:function (texto1, num4){
      let alphabet= ["Z","Y","X","W","V","U","T","S","R","Q","P","O","N","M","L","K","J","I","H","G","F","E","D","C","B","A"];
      let mayus1 = texto1.toUpperCase();
      let result=[]
      let espacio= " "
      for (let i=0;i<mayus1.length;i++){ 
  let indiceInicial= texto1.charAt(i);
  if (indiceInicial===" "){
    result.push(espacio)
  }
  else{ 
  result.push(alphabet[(alphabet.indexOf(indiceInicial)+num4)%26])
        } 
      }
      return result.join("")
    }
    }
  export default decipher; 

  