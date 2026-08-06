
let cadastrar = document.getElementById('cadastrar')

function cadastro (event){
    event.preventDefault()
    
    let nome = document.getElementById('inome').value
    let email = document.getElementById('imail').value
    let idade = document.getElementById('ida').value

    if ( nome !== '' && email !== '' && idade !== ''){
        alert(`Nome: ${nome}
               Email: ${email}
               Idade: ${idade}`)
    }
}


cadastrar.addEventListener('click' , cadastro)