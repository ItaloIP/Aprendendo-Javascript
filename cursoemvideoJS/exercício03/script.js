let numero = []
var p = document.getElementById('resultado')

function Adicionar(){
    var n = Number(document.getElementById('num').value)
    var input = document.getElementById('num')
    if (n <= 0 || n > 100 ){
        alert('Adicione um número correto ou não deixe o espaço em branco')}
    else if (numero.indexOf(n) != -1) {
        alert('Valor repetido! Escolha outro.')
    }
    else{
        var resul = document.getElementById('resul')
        numero.push(n)
        let item = document.createElement('option')
        item.innerText = `${n} adicionado na lista.`
        p.innerHTML = ''
        resul.appendChild(item)
    }
    input.value = ''
    input.focus()
}

function Maior(){
    var maior = 0
    for (var num in numero){
    if (maior < numero[num]){
        var maior = numero[num]}}
    return maior
}

function Menor(){
    var menor = numero[0]
    for (var num in numero){
        if (menor > numero[num]){
        var menor = numero[num]}
    }
    return menor
} 

function Media(){
    let media = 0
    for (var num in numero){
        media += numero[num]}
    return (media / numero.length)
}

function Soma(){
    let soma = 0
    for (var num in numero){
        soma += numero[num]}
    return soma
}

function Finalizar(){
    if (numero.length == 0) {
        alert('Adicione números!')
    }
    else{
        p.innerHTML = ''
        p.innerHTML += `<p>Há ${numero.length} números registrados. <br></p>`
        p.innerHTML += `<p>O maior número é o ${Maior()} <br></p>`
        p.innerHTML += `<p>O menor número é o ${Menor()} <br></p>`
        p.innerHTML += `<p>A média é ${Media()} <br></p>`
        p.innerHTML += `<p>A soma de todos os números é ${Soma()}</p>`}
}