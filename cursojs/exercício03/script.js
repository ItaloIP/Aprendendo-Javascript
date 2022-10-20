let numero = []

function Adicionar(){
    var n = Number(document.getElementById('num').value)
    if (n <= 0 || n > 100 ){
        alert('Adicione um número correto ou não deixe o espaço em branco')
    }else{
        var resul = document.getElementById('resul')
        numero.push(n)
        let item = document.createElement('option')
        item.innerText = `${n} adicionado na lista.`
        resul.appendChild(item)}
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

function Finalizar(){
    var p = document.getElementById('resultado')
    p.innerHTML += `O maior número é o ${Maior()} <br>`
    p.innerHTML += `O menor número é o ${Menor()} <br>`
}