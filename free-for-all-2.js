const person1 = [10, 9, 8, 10];
const person2 = [10, 10, 7, 9];
const person3 = [10, 4, 10, 9];
const person4 = [9, 7, 7, 10];
const person5 = [8, 6, 4, 8];

// Visualizando a média sem uso de função
//let media = 0;
//
//for ( let index = 0; index < person1.length; index += 1 ){
//  media += person1[index];
//}
//
//console.log(media / person1.length);
//
//media = 0;
//
//for ( let index = 0; index < person2.length; index += 1 ){
//  media += person2[index];
//}
//
//console.log(media / person2.length);

// Visualizando a média com uso de função

function average(person){

  let sum = 0;

  for ( let index = 0; index < person.length; index += 1 ){
    sum += person[index];
  }
  
  return sum / person.length;

}

console.log(average(person1));
console.log(average(person2));
console.log(average(person3));
console.log(average(person4));
console.log(average(person5));