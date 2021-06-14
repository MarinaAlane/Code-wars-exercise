// Você receberá uma série de números. Você deve classificar os números ímpares em ordem crescente,
// deixando os números pares em suas posições originais.

function sortArray(array) {
  // Return a sorted array.
     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
   return array.map((x) => x % 2 ? odd.shift() : x);
}

// Filtrei os números pares. com o filter, o sort para ordenados
// Mapeei esses números com map e usei o shift para ficar em suas posições originais. 

// SHIFT -> REMOVE O PRIMEIRO ELEMENTO DE UM ARRAY E RETORNA ESSE ELEMENTO.

