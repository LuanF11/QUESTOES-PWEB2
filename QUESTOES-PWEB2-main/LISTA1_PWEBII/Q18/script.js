let p = prompt("Insira a palavra");

function reverter(palavra){

    let dividi = palavra.split("");
    let reverte = dividi.reverse();
    let junta = reverte.join("")
    if(junta == palavra){
        return document.write("É palindromo")
    }else{
        return document.write("Não é palindromo")
    }
    

}


reverter(p)
