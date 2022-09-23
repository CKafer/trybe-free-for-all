// A primeira funcionalidade é a geração do cardápio! que deve ter o formato "ITEM - R$ PREÇO".

let items = ['Batata Frita', 'Hambúrguer', 'CheeseBurguer', 'Refrigerante', 'Nuggets', 'Suco'];
let prices = [4, 12, 14, 6, 12];

// Cardápio
//for ( let index = 0; index < items.length; index += 1 ) {
//  if ( prices[index] == undefined) {
//    console.log(items[index]+" = Preço Indefinido");
//  } else {
//    console.log(items[index]+" = R$ "+prices[index]);
//  }
//}

// EU TENHO UMA DETERMINADA QUANTIDADE DE DINHEIRO
// E, EU QUERO SABER QUAIS ITENS EU POSSO COMPRAR COM ESSE DINHEIRO.

let money = 12;
let list = [];
let bigger = 0;

for ( let index = 0; index < prices.length; index += 1 ) {
  if ( prices[index] <= money ) {
    list.push(items[index]);
  }
  // SE EU QUISER SABER QUAL O ITEM MAIS CARO QUE EU POSSO COMPRAR?
  if ( prices[index] <= money && princes[index] > bigger ) {
    bigger = prices[index];
  }
}

console.log(list);