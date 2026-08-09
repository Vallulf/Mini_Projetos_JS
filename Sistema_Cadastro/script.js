let formulario = document.getElementById('formulario')

async function cadastrar(event) {

    event.preventDefault()

    let campoNome = document.getElementById('nome')
    let campoEmail = document.getElementById('email')
    let campoTelefone= document.getElementById('telefone')

     let nome = campoNome.value
     let email = campoEmail.value
     let telefone = campoTelefone.value

    if ( nome !== '' && email !== '' && telefone !==''){


        window.alert(`Nome:${nome}
               E-mail:${email}
               Telefone:${telefone}`)

            campoNome.value = ''
            campoEmail.value = ''
            campoTelefone.value = ''

            campoNome.focus()


        
    }
    
}







formulario.addEventListener('submit', cadastrar)