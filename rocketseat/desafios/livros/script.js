let livro = 0 

let Augusto = 0



const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log(`Há ${booksByCategory.length} categorias`)
autores = []
for (let categorias of booksByCategory){
    livro += categorias.books.length
    for (let book of categorias.books){
        if (autores.indexOf(book.author) === -1){
        autores.push(book.author)
    }}
    for(let book of categorias.books){
        if(book.author === 'Augusto Cury'){
            Augusto += 1
        }
    }
}

function BuscarLivrodoAutor(Objeto, Autor){
    for (let categorias of Objeto){    
        for(let book of categorias.books){
            if(book.author === Autor){
                
            }
        }
    }
    console.log(`Livros do autor ${Autor} : ${book.title}`)
}

console.log(`Há ${livro} livros em TODAS as categorias`)
console.log(`Há ${autores.length} autores no total`)
console.log(`Há ${Augusto} livros do autor Augusto`) 
BuscarLivrodoAutor(booksByCategory, 'Augusto Cury')