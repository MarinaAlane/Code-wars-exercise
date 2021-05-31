// ROT13 é uma cifra de substituição de letra simples que substitui uma letra pela
// letra 13 letras depois dela no alfabeto.

// Crie uma função que pegue uma string e retorne a string cifrada com Rot13.
// Se houver números ou caracteres especiais incluídos na string,
// eles devem ser retornados como estão.

function rot13(message){
  //your code here
  const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
  }