// Você deve, dada uma string, substituir cada letra por sua posição no alfabeto.

function alphabetPosition(text) {
  return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
}

// Match retorna o correspondente de uma string com um regEx
// Mapeia cada letra/elemento
// Tira todo os carcateres em caixa alta e deixa tudo em letras minúsculas
// charCodeAt - > Um número representando o valor de unidade de código UTF-16 do caractere no índice fornecido.
// join pra colocar um espaço entre os caracteres 