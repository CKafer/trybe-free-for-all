// Jogo do Ricardo
const studentGame = [6, 11, 54, 33, 25, 59];
const rodsGame = [9, 14, 29, 34, 46, 58];

// Jogo Sorteado
let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  megaSenaNumbers.push(Math.floor(Math.random() * 60) + 1);
}


// Conferindo o jogo
let numberOfHits = 0;

function megaSenaChecker(megaSenaNumbers, studentGame) {
  for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawNumber = megaSenaNumbers[index];
    // console.log('Número sorteado:', drawNumber);

    for (let indexStudent = 0; indexStudent < studentGame.length; indexStudent += 1) {
      let studentNumber = studentGame[indexStudent];
      // console.log('Número do Ricardo:', studentNumber);

      if (drawNumber === studentNumber) {
        numberOfHits += 1;
      }
    }
  }

  return numberOfHits;
}

console.log('Jogo sorteado:', megaSenaNumbers);
console.log('-----------');
console.log('Jogo do Ricardo:', studentGame);
console.log('-----------');
console.log('Jogo do Rods:', rodsGame);