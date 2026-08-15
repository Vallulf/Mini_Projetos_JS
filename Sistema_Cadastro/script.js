let formulario = document.getElementById('formulario')
let idclienteEditando = null

async function cadastrar(event) {

    event.preventDefault()
    
    if (idclienteEditando !== null) {
        await atualizar()
        return
    }

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
    let read = document.getElementById('listarClientes')

    read.innerHTML=''

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
         

        let celulaAcao =document.createElement('td')
        let botaoEditar = document.createElement('button')
        botaoEditar.textContent  = 'Editar'
        
        celulaAcao.appendChild(botaoEditar)
        linha.appendChild(celulaAcao)

        let botaoExcluir = document.createElement('button')
        botaoExcluir.textContent = 'Excluir'

        celulaAcao.appendChild(botaoExcluir)

        botaoEditar.addEventListener('click', () =>{
            let campoNome = document.getElementById('nome')
            let campoEmail = document.getElementById('email')
            let campoTelefone = document.getElementById('telefone')

            campoNome.value = cliente.nome
            campoEmail.value = cliente.email
            campoTelefone.value = cliente.telefone

            idclienteEditando = cliente.id
        })
        botaoExcluir.addEventListener('click', () =>{
            let confirmar = confirm("Tem certeza que deseja excluir este cliente?")
            if(confirmar){
            excluir(cliente.id)
            }
        })


       read.appendChild(linha) 
    });
}
async function atualizar() {
    let campoNome = document.getElementById('nome')
    let campoEmail = document.getElementById('email')
    let campoTelefone = document.getElementById('telefone')

    const{data, error} = await supabaseClient
    .from('clientes')
    .update({
        nome: campoNome.value,
        email: campoEmail.value,
        telefone: campoTelefone.value
    })
    .eq('id', idclienteEditando)

    if(error){
        console.log(error)
        return
    }
    campoNome.value= ''
    campoEmail.value=''
    campoTelefone.value= ''

    idclienteEditando = null
    ListarClientes()
    

}
async function excluir (id) {
    const {data , error} = await supabaseClient
    .from ('clientes')
    .delete()
    .eq ('id' , id )
    if (error){
        console.log(error)
        return
    }

    
}





formulario.addEventListener('submit', cadastrar)
ListarClientes()
