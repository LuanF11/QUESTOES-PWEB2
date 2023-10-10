let lista = []

for (let x = 1; x<=50; x++){
    if(x % 2 == 0){
        lista.push(x)
    }
}

for (const valor of lista) {

    console.log(valor)
    
}