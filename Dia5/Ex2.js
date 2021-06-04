// Crie uma função que ordene somente os números de um array

function order(words){
  // ...
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');//
}

// split -> divide uma string em uma lista ordenada de substrigs e retorna tudo em um array
// sort -> HOF ordena elementos do próprio rray e retorna o array.
// Retorna uma correspondencia entre uma string com um Regex
// join retorna junta todos os elementos de um array