// Complete a funao que recebe um array de números inteiros e retorna
// uma das opções a seguir

// "yes, ascending" - Se os números estão em ordem crescente
// "yes, descending" - Se os números estão em ordem decrescente 
// "no" - Se os números estiverem em qualquer outra ordem 

const isSortedAndHow = array =>
  array.every((number, i) => i === 0 || number >= array[i - 1])
    ? 'yes, ascending'
    : (array.every((number, i) => i === 0 || number <= array[i - 1])
      ? 'yes, descending'
      : 'no')