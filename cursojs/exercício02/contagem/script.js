function Contar(){
    var a = Number(document.getElementById('a').value)
    var b = Number(document.getElementById('b').value)
    var c = Number(document.getElementById('c').value)
    var div = document.getElementById('resultado')
    if (c == 0){
        alert('Pula será considerado 1.')
        var c = 1
    }

    for (a; a <=b ; a++){
        div.innerText= `${a}`
        // div.innerHTML = 
    }
}