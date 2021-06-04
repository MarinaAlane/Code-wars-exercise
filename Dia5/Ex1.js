// Você deve verificar se todos os valores na matriz estão abaixo ou iguais ao valor limite. 
// Se estiverem, retorne verdadeiro. Caso contrário, retorne falso.

function smallEnough(array, limit){
  return array.filter( (value) => value > limit ).length > 0 ? false : true;
}

// filter -> um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// Operador ternário : expressão booleana ? código 1 se sim : código 2 senão;