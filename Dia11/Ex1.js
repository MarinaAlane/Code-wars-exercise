// Reverta todas as outras palavras em uma determinada string e, em seguida, retorne a string.
// Jogue fora qualquer espaço em branco à esquerda ou à direita, garantindo que haja exatamente um
// espaço entre cada palavra. Os sinais de pontuação devem ser tratados como se fizessem parte da palavra
//  neste kata. Você terá que traduzir uma string para o alfabeto do piloto (alfabeto fonético da OTAN).

let table = {
  'A': 'Alfa',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'Xray',
  'Y': 'Yankee',
  'Z': 'Zulu',
}

function to_nato(words) {
  return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
}

// TO UPPERCASE => COLOCA TUDO EM CAIXA ALTA
// JOIN JUNTA TUDO 
// split -> divide a string em substrings

