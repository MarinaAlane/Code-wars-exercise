// Etapa 1: crie uma função chamada encode () para substituir todas as vogais minúsculas em uma 
// determinada string por números de acordo com o seguinte padrão:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// Por exemplo, encode ("hello") retornaria "h2ll4". Não há necessidade de se preocupar 
// com as vogais maiúsculas neste kata.

// Passo 2: Agora crie uma função chamada decode () para transformar os 
// números de volta em vogais de acordo com o mesmo padrão mostrado acima.

// Por exemplo, decode ("h3 th2r2") retornaria "hi there".

// Para simplificar, você pode assumir que quaisquer números passados para a função corresponderão a vogais.
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')