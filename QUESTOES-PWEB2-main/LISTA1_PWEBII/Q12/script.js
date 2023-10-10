let numero = parseInt(prompt("Digite um número:"));
let ehPrimo = true;

if (numero <= 1) {
  ehPrimo = false;
} else {
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  alert(`${numero} é um número primo.`);
} else {
  alert(`${numero} não é um número primo.`);
}
