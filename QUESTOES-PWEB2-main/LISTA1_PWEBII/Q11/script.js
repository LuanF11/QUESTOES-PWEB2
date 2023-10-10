function maiorNumero (...Numeros){
    let maximo;
    for (const x of Numeros) {
        maximo = Math.max(x);
    }
    return alert(maximo);
}

let n1 = parseInt(prompt("Informe o primeiro numero"));
let n2 = parseInt(prompt("Informe o segundo numero"));
let n3 = parseInt(prompt("Informe o terceiro numero"));

maiorNumero(n1,n2,n3);
    

