// Conte o número de divisores de um número inteiro positivo

function getDivisorsCnt(n){
  // todo
 for (var d = 0, i = n; i > 0; i--) {
  if (n % i == 0) d++;
}

return d;
}