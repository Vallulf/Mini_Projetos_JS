let pessoas = [
    { nome: "Walter", idade: 25 },
    { nome: "Luane", idade: 24 },
    { nome: "Miguel", idade: 8 },
    { nome: "Arthur", idade: 15 }
]

pessoas.forEach(pessoa => {
 if(pessoa.idade > 18)
    console.log(pessoa.nome,pessoa.idade)
})