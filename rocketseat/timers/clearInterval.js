const tempo = 1000
const finished = () => console.log('done')


let interval = setInterval(finished, tempo)


setTimeout( () => clearInterval(interval), 3000)