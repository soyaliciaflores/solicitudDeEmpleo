const cipher = {
//AQUI EMPIEZA LA MAGIA
  encode:function (texto, num2){
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
    result.push(alphabet[(alphabet.indexOf(indiceInicial)+num2)%26])
      } 
    }
  return result.join("")
  }
  }

  
export default cipher; 





