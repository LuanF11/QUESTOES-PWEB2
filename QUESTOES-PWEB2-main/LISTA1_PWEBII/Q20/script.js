let altura = parseFloat(prompt("Passe sua altura"));
let peso = parseFloat(prompt("Passe seu peso"));

let imc = peso / (altura*altura)

alert(`Seu imc é de ${imc.toFixed(2)}`)