// temos um número de elementos de nível superior em uma matriz.

// Sua tarefa é criar uma função deepCount que retorne o número de TODOS os
// elementos em uma matriz, incluindo qualquer uma das matrizes de nível interno.

function deepCount(a){
  let count = a.length;
  for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}