// Dada uma lista de dígitos, retorne o menor número que poderia ser formado a
// partir desses dígitos, usando os dígitos apenas uma vez (ignore as duplicatas).

function minValue(values){
  //your code here
 const orderedNumbers = values.sort();
 const noRepeat = [...new Set(orderedNumbers)]
  const numsFinal =  noRepeat.slice(0,10).join('');
  return nums = parseFloat(numsFinal)
  
}

// SET -> TEM POR PADRÃO NÃO REPETIR ELEMENTOS DE UM ARRAY 
//SLIVE -> RETORNA UM SUBARRAY A APARTIR DA CÓPIA DE UM ARRAY COM AS POSIÇÕES DESEJADAS.