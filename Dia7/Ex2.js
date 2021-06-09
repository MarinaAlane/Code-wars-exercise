// Pegue 2 strings s1 e s2 incluindo apenas letras de ato z. Retorne uma nova string
// classificada, a mais longa possível, contendo letras distintas - cada uma tomada
// apenas uma vez - vindas de s1 ou s2.

function longest(s1, s2) {
  // your code
  return [...new Set((s1 + s2).split(''))].sort().join('');
}

// New Set -> Permite armazenar valores únicos de qualquer tipo. 
// split -> divide strings em substrings 
// join -> junta tudoo