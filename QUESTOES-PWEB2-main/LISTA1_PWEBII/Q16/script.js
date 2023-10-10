let numeroS = parseInt(Math.random() * 100)+1;

let numeroE;

do {
    numeroE = parseInt(prompt("Tente adivinhar o número de 1 a 100"));
    // console.log(numeroS);
    if (numeroE < numeroS) {
        alert("O número escolhido é menor que o sorteado");
    } else if (numeroE > numeroS) {
        alert("O número escolhido é maior que o sorteado");
    } else if (numeroE == numeroS) {
        alert("Você acertou o número");
        break;
    } else {
        alert("Insira um número válido");
    }
} while (numeroE != numeroS);
    

