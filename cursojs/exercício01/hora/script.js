function Hora(){
    var agora = new Date()
    var hora = agora.getHours()
    var hora = 1
    var body = document.getElementById('corpo')
    var txt = document.getElementById('text')
    var img = document.getElementById('imagem')
    txt.innerText = `São ${hora} horas.`
    if (hora < 12){
        body.style.backgroundColor = 'rgb(176, 255, 229)'
        img.src = 'manha.jpg'
        // txt.innerText = 'Bom dia!'
    }
    else if (hora < 18){
        body.style.backgroundColor = 'rgb(254, 218, 111)'
        img.src = 'tarde.jpg'
        // txt.innerText = 'Boa tarde!'
    }
    else{
        body.style.backgroundColor = 'rgb(135, 151, 255)'
        img.src = 'noite.jpg'
        // txt.innerText = 'Boa noite!!'
    }
}