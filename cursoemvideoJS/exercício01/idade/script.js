var date = new Date()
var thisy = date.getFullYear()

function Checar(){
    var ano = document.getElementById('ano').value
    var idade = thisy - Number(document.getElementById('ano').value)
    var sexo = document.querySelector('input[name=sexo]:checked').value
    var img = document.getElementById('resul')
    var text = document.getElementById('text')
    console.log(sexo,idade)
    if (idade <= 0 || ano == 0){
        alert('Digite os valores corretamente!!')
    }

    else if (idade < 13){
        if (sexo == 'femi'){
            text.innerText = `Uma menina de ${idade} anos`
            img.src = 'criançaf.jpg'
        }
        else{
            text.innerText = `Um menino de ${idade} anos`
            img.src = 'criançam.jpg'
        }
    }
    else if (idade < 18){
        if (sexo == 'femi'){
            text.innerText = `Uma adolescente com ${idade} anos`
            img.src = 'jovemf.jpg'

        }
        else{
            text.innerText = `Um adolescente com ${idade} anos`
            img.src = 'jovemm.jpg'
        }

    }
    else if (idade < 60){
        if (sexo == 'femi'){
            img.src = 'adultof.jpg'
            text.innerText = `Adulta com ${idade} anos`
        }
        else{
            img.src = 'adultom.jpg'
            text.innerText = `Adulto com ${idade} anos`
        }
    }
    else{
        if (sexo == 'femi'){
            img.src = 'idosof.jpg'
            text.innerText = `Idosa com ${idade} anos`
        }
        else{
            img.src = 'idosom.jpg'
            text.innerText = `Idoso com ${idade} anos`
        }
    }
}