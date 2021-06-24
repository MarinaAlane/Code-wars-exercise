// Existe uma matriz com alguns números. Todos os números são iguais, exceto um. Tente encontrar!
function findUniq(arr) {
  // do magic
    return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
}
