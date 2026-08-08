
let formulario = document.getElementById('formCadastro')

async function cadastro (event){
    event.preventDefault()
    
    let Campnome = document.getElementById('inome')
    let Campemail = document.getElementById('imail')
    let Campidade = document.getElementById('ida')

    let nome = Campnome.value
    let email = Campemail.value
    let idade = Campidade.value

    if ( nome !== '' && email !== '' && idade !== ''){

        const { data, error } = await window.supabaseClient.from('cadastro')
            .insert([
                 {
            nome: nome,
            email: email,
            idade: idade
                
        
        }
        ]);
        alert(`Nome: ${nome}
               Email: ${email}
               Idade: ${idade}`)
               
               Campnome.value=''
               Campemail.value=''
               Campidade.value=''

            Campnome.focus()
    }else{
        alert('Preencha todos os campos')
    }
}


formulario.addEventListener('submit' , cadastro)