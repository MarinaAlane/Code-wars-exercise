// Este programa testa a vida de um evaporador contendo um gás.
// Conhecemos o conteúdo do evaporador (conteúdo em ml), a porcentagem de espuma ou gás 
// perdida todos os dias (evap_per_day) e o limite (threshold) em porcentagem além da qual
// o evaporador não é mais útil. Todos os números são estritamente positivos.
// O programa informa o enésimo dia (como um número inteiro) em que o evaporador estará
// fora de uso.

function evaporator(content, evap_per_day, threshold){ 
  var i = 0; 

var today = content;

while(today >= content * threshold / 100.0) {
      today = today * (1 - evap_per_day /  100.0);
      i++;
}
return i; 
}