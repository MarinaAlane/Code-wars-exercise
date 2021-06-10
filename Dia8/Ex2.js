// crie uma função que, quando fornecida com um trio, retorna o índice do elemento 
// numérico que está entre os outros dois elementos.

var gimme = function (inputArray) {
  // Implement this function
  let index = 0;
  let max = Math.max(...inputArray);
  let min = Math.min(...inputArray);
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] !== max && inputArray[i] !== min){        
      index = i;
    }
  }
  return index;};