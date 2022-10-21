let pessoa = {
    nome:'Jose', idade:'38',sexo:'M',peso:56.1 ,engordar(p=0){
        this.peso += p
    }}
pessoa.engordar(100)
console.log(pessoa)