function ValidacaoNotas(num){

    if (num < 100 && num >= 90){
        return console.log('A')
    }else if (num < 90 && num >= 80){
        return console.log('B')
    }else if (num < 80 && num >= 70){
        return console.log('C')
    }else if (num < 70 && num >= 60){
        return console.log('D')
    }else if (num < 60 && num >= 0){
        return console.log('F')
    }else{
        return console.log('Nota inválida')
    }
}


ValidacaoNotas(101)
ValidacaoNotas(-1)
ValidacaoNotas(0)
ValidacaoNotas(1)
ValidacaoNotas(45)
ValidacaoNotas(60)
ValidacaoNotas(87)
ValidacaoNotas(96)