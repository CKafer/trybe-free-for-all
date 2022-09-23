// Jogo do Ricardo
const studentGame = [6, 11, 54, 33, 25, 59];
console.log('Jogo do Ricardo:', studentGame);

// Jogo Sorteado
const number1 = 20;
const number2 = 37;
const number3 = 11;
const number4 = 25;
const number5 = 26;
const number6 = 1;

const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
console.log('Jogo Sorteado:', megaSenaNumbers);

// Conferindo o Jogo
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawNumber = megaSenaNumbers[index];
  // console.log('Número Sorteado', megaSenaNumbers[index]);

  let studentNumber = studentGame[index];
  // console.log('Número do Ricardo:', studentNumber);

  for (let indexStudent = 0; indexStudent < studentGame.length; indexStudent += 1) {
    let studentNumber = studentGame[indexStudent];
      
    if ( drawNumber === studentNumber ){
      numberOfHits += 1;
    }
  }
}

console.log(numberOfHits);