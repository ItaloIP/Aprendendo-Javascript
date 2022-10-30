function TempConverter(txt){
    let text = txt.toUpperCase
    let num = 0
    let temp = ''
    for (let letra of txt){
        if (letra == Number){
            num += letra
        }
    }
    console.log(letra)
}

console.log(TempConverter('45f'))
console.log('opa')