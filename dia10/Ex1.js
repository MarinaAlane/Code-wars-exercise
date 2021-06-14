
// Dado um inteiro positivo n escrito como abcd ... (a, b, c, d ... sendo dígitos) e um
// inteiro positivo p . queremos encontrar um inteiro positivo k, se ele existir, tal como a
// soma dos dígitos de n levados às potências sucessivas de p é igual a k * n. 

function digPow(n, p){
  let string = n.toString();
  let tamString = string.length;
  let result = 0;
    for(var i = 0; i < tamString ; i++) {
      var numberser = parseInt(string.charAt(i), 10);
      result +=  Math.pow(numberser, p + i)
    }
  var x = Math.pow(n,p);
    if(result === x) {
      return p;
      } else if(result % n === 0) {
      return result / n;
    }else {
      return -1  
}
}


// CharAt retorna o caracter especificado a partir de uma string
// PARSEINT - Analisa um argumento string e retorna um inteiro na base especificada
// POW 0 RETORNA A BASE ELEVADA AO EXPOENTE POWER = BASE EXPOENTE.