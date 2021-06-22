// Seu objetivo neste kata é implementar uma função de diferença, que subtrai 
// uma lista da outra e retorna o resultado. Deve remover todos os valores da lista a, que
// estão presentes na lista b mantendo sua ordem.

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}

// filtra os elementos de um array e verifica se existe o element do array filtrado A
// array B, se não tiver ele vai incluir esse elemento no novo array que o includes
// retorna