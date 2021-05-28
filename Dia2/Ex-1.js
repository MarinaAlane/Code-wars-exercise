// Uma máquina permite código PIN de 4 ou 6 dígitos, não podendo conter nada além de exatamente
// 4 ou 6 dias.


function validatePIN (pin) {
  return typeof pin === 'string' && Number.isInteger(+pin) && [4, 6].includes(pin.length) 
}

// Foi comparado se é uma string de  números inteiros e positivos.
// O includes aqui vai retornar true se o pin tem 4 ou 6 dígitos. 