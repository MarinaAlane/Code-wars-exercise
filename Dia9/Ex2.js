// Escreva uma função dirReduc que pegará um array de strings e retornará um array de strings com as direções desnecessárias removidas
// (W <-> E ou S <-> N lado a lado).

const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
return arr.reduce((acc, cur) => (opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc), [])

// SLICE  =>  retorna uma cópia de parte de um array a partir de um subarray
//criado entre as posições início e fim (fim não é necessário)
// de um array original. O Array original não é modificado.

// PUSH - Adiciona elementos em um array 

// POP - Remove o último elemento de um array e retorna aquele elemento