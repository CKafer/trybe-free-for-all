// A primeira funcionalidade é a geração do cardápio! que deve ter o formato "ITEM - R$ PREÇO".

let items = ['Batata Frita', 'Hambúrguer', 'CheeseBurguer', 'Refrigerante', 'Nuggets'];
let prices = [4, 12, 14, 6, 12];


//console.log(items[0]+" = R$ "+prices[0]);

for ( let index = 0; index < items.length; index += 1 ) {
  console.log(items[index]+" = R$ "+prices[index]);
}