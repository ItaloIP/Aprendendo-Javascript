function Tabuada(){
    var num = document.getElementById('num').value
    if (num.length == 0){
        alert('Digite um número!')
    }
    else{
        var num = Number(num)
        var resul = document.getElementById('resul')
        resul.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.innerText = `${num} x ${c} = ${num*c}`
            item.value = `resul${c}`
            resul.appendChild(item)}
    }
}