function Contar(){
    var a = Number(document.getElementById('a').value)
    var b = Number(document.getElementById('b').value)
    var c = Number(document.getElementById('c').value)
    var div = document.getElementById('resultado')

    if (a == 0|| b == 0)
    {
        div.innerHTML = 'Não foi possível realizar a contagem.'
    }

    else if (c == 0)
    {
        alert('Pula será considerado 1.')
        div.innerText = ''
        for (a ; a <= b  ; a++)
        {
            while (a < b)
            { 
                div.innerHTML += ` ${a} ->`
            }
        }
    }
    else
    {
        div.innerText = ''
        for (a ; a <= b  ; a++)
        {
            div.innerHTML += ` ${a}`
            if (a < b)
            {
                div.innerHTML += ' ->'
            }
        }
    }
}