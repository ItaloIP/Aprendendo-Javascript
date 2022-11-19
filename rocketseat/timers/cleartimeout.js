// CAncela um timeout

const tempo = 3000
const finished = () => console.log('done')

let acabar = setTimeout(finished, tempo)
clearTimeout(acabar)