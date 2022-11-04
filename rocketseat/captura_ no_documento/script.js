const botão = document.querySelector('#OpenModal')
const Jan = document.querySelector('.modal-wrapper')

function AbrirJan(){
    Jan.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    const key = event.key === 'Escape'
    if(key){
        Jan.classList.add('invisible')
        console.log('ok')
    }
})