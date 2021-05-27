// Ex 1 - Ao receber um número, retorne uma string com a forma expandida dos números recebidos.

function expandedForm(num) {
  var dez = 10;
  var result = [];
  while (num > 1) {
    var resto = num % dez;
    if(resto > 0) {
      result.unshift(resto);
    }
    num -= resto;
    dez *= 10;
  }
  return result.join(' + ');
}

// O método unshift  adiciona um ou mais elementos no início de um array e retorna o length atual
// o método join adiciona uma string entre elementos de uma array