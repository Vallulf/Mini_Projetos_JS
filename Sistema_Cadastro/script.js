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
    .select()
    if(error){
        console.error(error)
        return
    }
    let ListaClientes = document.getElementById('listarClientes')

    data.forEach( cliente => {

        let linha = document.createElement('tr')

        let celulaId = document.createElement('td')
        celulaId.textContent = cliente.id
        linha.appendChild(celulaId)

        let celulaNome = document.createElement('td')

        celulaNome.textContent = cliente.nome
        linha.appendChild(celulaNome)

        let celulaEmail = document.createElement('td')
        
        celulaEmail.textContent = cliente.email
        linha.appendChild(celulaEmail)

        let celulaTel = document.createElement('td')
        celulaTel.textContent = cliente.telefone
        linha.appendChild(celulaTel)
        ListaClientes.appendChild(linha)


        
    });
}






formulario.addEventListener('submit', cadastrar)
ListarClientes()