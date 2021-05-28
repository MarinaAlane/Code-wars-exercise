// Um isograma é uma palavra que não possui letras repetidas, consecutivas ou não consecutivas.
// Implemente uma função que determine se uma string que contém apenas letras é um isograma

function isIsogram(str) {
  
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i) {
    for(i2 = i + 1; i2 < str.length; ++i2) {
      if(str[i] === str[i2]) {
        return false;
      }
    }
  }
  return true;
}

// Primeiro foi passado a string pra lower case pra não ter conflito, já que mais pra frente seria feito
// uma comparação estrita
// Foi feito dois fors, um pra ver uma índice e outro pra ver o índice seguinte ao índice do primeiro for
// E então foi comparado se o primeiro índice é estritamente igual ao segundo. 