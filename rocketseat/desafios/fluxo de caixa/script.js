let família = {
    ganhos: [300, 3000.45],
    gastos: [10000]
}

function CalculoDespesa(ganhos, gastos){
    //Ganhos
    somamais = 0
    for (let ganho of ganhos){
        somamais += ganho
    }

    //Gastos
    somamenos = 0
    for (let gasto of gastos){   
        somamenos += gasto
    }
    
    if (somamais - somamenos >= 0){
        console.log(`Gastos positivos! -> ${(somamais - somamenos).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
    }
    else{
        console.log(`Gastos negativos! -> ${(somamais - somamenos).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})}`)
    }
}

CalculoDespesa(família.ganhos, família.gastos)
