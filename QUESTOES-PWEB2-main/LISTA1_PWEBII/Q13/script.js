let somaNotas = 0;
const numNotas = 5;

for (let x = 1; x <= numNotas; x++) {
    let nota = parseFloat(prompt(`Digite a nota ${x}: `));
    if (isNaN(nota)) {
        alert("Por favor, insira um número válido.");
        x--; 
    } else {
        somaNotas += nota;
    }
}
const media = somaNotas / numNotas;

alert(`A média das ${numNotas} notas é: ${media.toFixed(2)}`);