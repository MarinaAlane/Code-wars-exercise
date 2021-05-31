// Substituir/remover as vogais de uma string

function disemvowel(str) {
  return (str || '').replace([/[aeiou]/gi], '');
 }

 // Usado método replace para substituir vogais por uma strig vazia. 
 // Usado regex para indicar os elementos a ser substituidos com as flags
 // g e i -> g indica todoa as ocorrencias da regex e i ignora o case sensitive