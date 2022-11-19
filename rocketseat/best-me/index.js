const perguntas = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido? O que poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas eu ajudei hoje?'
]


const ask = (index = 0) => {
    process.stdout.write(perguntas[index] + '-> ')
}

ask()

const resposta = []
process.stdin.on('data', (data) => {
    resposta.push(data.toString().trim())
    if (resposta.length < perguntas.length){
        ask(resposta.length)
    }else{
        console.log(resposta)   
        process.exit()
    }})
