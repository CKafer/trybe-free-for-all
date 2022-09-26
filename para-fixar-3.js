

const A = 5;
const B = 2;

function soma(paramA, paramB) {
  return paramA + paramB;
}

function sub(paramA, paramB) {
  return paramA - paramB;
}

function multi(paramA, paramB) {
  return paramA * paramB;
}

function div(paramA, paramB) {
  return paramA / paramB;
}

function mod(paramA, paramB) {
  return paramA % paramB;
}

function maior(paramA, paramB) {
  if ( paramA === paramB )
    return 'A e B são iguais';
  if ( paramA > paramB )
    return 'A é maior que B';
  else
  return 'B é maior que A';
}

console.log("- A soma de "+A+" e "+B+" é igual a: "+soma(A,B));
console.log("- A subtração de "+A+" e "+B+" é igual a: "+sub(A,B));
console.log("- A multiplicação de "+A+" e "+B+" é igual a: "+multi(A,B));
console.log("- A divisão de "+A+" e "+B+" é igual a: "+div(A,B));
console.log("- O módulo de "+A+" e "+B+" é igual a: "+mod(A,B));
console.log("-----------------------------------------");
console.log("- Dentre A e B: " +maior(A,B));