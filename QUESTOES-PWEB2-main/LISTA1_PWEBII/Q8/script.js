const numeroS = 4;
let numeroE;

do{
    numeroE = parseInt(prompt("Tente adivinhar o numero"));
    
    if(numeroE == 4){
        alert("Voce acertou");
    }else{
        alert("Parece que voce errou, tente mais uma vez");
    }    
}while (numeroE != numeroS)
    

