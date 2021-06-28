// Bob está se preparando para passar no teste de QI. A tarefa mais frequente neste
// teste é descobrir qual dos números dados difere dos outros. Bob observou que um número
// geralmente difere dos outros em uniformidade. Ajude Bob - para verificar suas respostas,
// ele precisa de um programa que entre os números dados encontre um que seja diferente em
// uniformidade e retorne uma posição desse número. ! Lembre-se de que sua tarefa é ajudar
// Bob a resolver um teste real de QI, o que significa que os índices dos elementos
// começam em 1 (não em 0)

function iqTest(numbers){
  numbers=numbers.split(" ").map(function(x){return parseInt(x)%2;});
  if (numbers[0]+numbers[1]+numbers[2]==3 || numbers[0]+numbers[1]+numbers[2]==2) return numbers.indexOf(0)+1;
  else return numbers.indexOf(1)+1;
}