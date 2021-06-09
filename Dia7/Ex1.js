// Number = funções genericas p numeros
// isInteger => booleano e verifica se o número é inteiro
// Math.sqrt => dá a raiz quadrada no número em questão

// Dado um número inteiro, determine se é um número quadrado:

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
} 