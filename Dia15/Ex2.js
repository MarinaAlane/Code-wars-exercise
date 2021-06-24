// Gere uma string de cor rgb gerada aleatoriamente. Suponha que todos eles tenham sempre 6 dígitos.

var generateColor = function() {
  // show em the code!
 return "#" + Math.random().toString(16).slice(2, 8);
};