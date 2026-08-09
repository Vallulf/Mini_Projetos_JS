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

        const{data , error} = await supabaseClient
        .from('clientes')
        .insert({
            nome: nome,
            email: email,
            telefone: telefone
        })
        if(error){
            console.error(error)
            return

        }

            campoNome.value = ''
            campoEmail.value = ''
            campoTelefone.value = ''

            campoNome.focus()


        
    }
    
}
async function ListarClientes(event) {
    const {data , error } = await supabaseClient
    .from('clientes')
    .select(

    )
    if(error){
        console.error(error)
        return
    }
    console.log(data)
}






formulario.addEventListener('submit', cadastrar)
ListarClientes()