var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora} horas`)
if (hora >= 6) {
    console.log('Bom dia!')
}
else if (hora > 12) {
    console.log('Boa tarde!')
}
else if (hora > 0){
    console.log('Boa madrugada!')
}

else{
    console.log('Boa noite!')
}