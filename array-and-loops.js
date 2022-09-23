const lotteryNumbers = [14, 25, 35, 46, 43, 36];

// Estrutura sem FOR
//console.log(lotteryNumbers);
//console.log(lotteryNumbers[0]);
//console.log(lotteryNumbers[1]);
//console.log(lotteryNumbers[2]);
//console.log(lotteryNumbers[3]);
//console.log(lotteryNumbers[4]);
//console.log(lotteryNumbers[5]);

//console.log(lotteryNumbers.length);

// Estrutura com FOR
//for (let index = 0; index < lotteryNumbers.length; index += 1) {
//  console.log(lotteryNumbers[index]);
//}

// Estrutura com FOR OF
for (let value of lotteryNumbers) {
  console.log(value);
} 