// Retorne uma string formatada como uma lista de nomes separados por vírgulas,
// exceto para os dois últimos nomes, que devem ser separados por um "e" comercial.

function list(names){
  return names.map(o => o.name).join(', ').replace(/^(.*)(, )(.*)$/, '$1 & $3');
}
// Coloca a virgula com o join, e substitui a última virgula pelo e comercial. 