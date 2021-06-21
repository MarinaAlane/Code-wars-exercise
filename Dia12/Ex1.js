// um homem tem um carro bastante antigo que vale $ 2.000.
//  Ele viu um carro usado valendo $ 8.000. Ele quer ficar com seu
//  carro velho até poder comprar o de segunda mão. 
// Ele acha que pode economizar US $ 1.000 por mês, mas os preços de seu carro antigo e 
//  o novo diminuem 1,5% ao mês. Além disso, esse percentual de perda aumenta de 0,5% no 
// final de cada dois meses. Nosso homem acha difícil fazer todos esses cálculos.

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  // Verifica se ainda precisa poupar.
  if(startPriceOld >= startPriceNew) {return [0, Math.round(startPriceOld - startPriceNew)];}
 
   
  let months = 0
  let total = startPriceOld;
 
  // Enquanto o valor total que se tem for menor que o preço do novo carro:
  while(total < startPriceNew) {
      // Adiciona mais dinheiro ao total
      total += savingperMonth;
   
      // Diminui do total a porcentagem de depreciação em relação ao total de dinheiro que se tem
      total -= startPriceOld * percentLossByMonth / 100;

      // Diminui do total a porcentagem de depreciação em relação ao valor total dos carros
      startPriceNew -= startPriceNew * percentLossByMonth / 100;
      startPriceOld -= startPriceOld * percentLossByMonth / 100;
       
      // Add os meses
      months ++;

      // Verifica se o mês é par ou ímpar para aumentar o percentual de depreciação no mês em 0.5
      months % 2 !== 0 ? percentLossByMonth += 0.5 : percentLossByMonth;
   
}
 
return [months, Math.round(total - startPriceNew)];
}
