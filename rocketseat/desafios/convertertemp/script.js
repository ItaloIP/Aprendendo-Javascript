function TempConverter(txt){
    let num = ''
    let temp = ''
    for (let letra of txt){
        if (isFinite(letra)){
            num += letra
        }else{
            temp += letra
        }
    }
    if (temp == 'F' || temp == 'f'){
        return `${(num - 32) * 5/9}C°`
    }else if (temp == 'C' || temp == 'c'){
        return `${num * 9/5 + 32}F°`
    }
    else{
        return console.log('Houve um erro!')
    }
}

console.log(TempConverter('32f'))

console.log(TempConverter('32d'))
