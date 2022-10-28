function Contar(){
    var b = document.getElementById('b').value
    var a = document.getElementById('a').value
    var c = document.getElementById('c').value
    var div = document.getElementById('resultado')
    
    
    if (a.length == 0 || b.length == 0)
    {
        div.innerHTML = 'Não foi possível realizar a contagem.'
    }
    
    if (Number(c) == 0 || Number(c) < 0)
    {
        alert('O pulo será considerado 1')
        Number(a)
        Number(b)
        var c = 1
    }

    else{
        Number(a)
        Number(b)
        Number(c)
    }

    if (a < b)
    {
        var a = Number(a)
        var b = Number(b)
        var c = Number(c)
        div.innerText = ''
        for (a ; a <= b  ; a += c)
        {
            console.log('aa')
            div.innerHTML += ` ${a}`
            if (a < b)
            {
                div.innerHTML += '👉'
            }
        }
    }
    else{
        var a = Number(a)
        var b = Number(b)
        var c = Number(c)
        div.innerText = ''
        for (a ; a >= b; a -= c)
        {
            console.log('b')
            div.innerHTML += ` ${a}`
            if (a > b)
            {
                div.innerHTML += '👉'
            }
        }
    }
    div.innerText += '🏁'
}