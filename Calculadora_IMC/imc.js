 
 let calcular = document.getElementById('calcular')

 
 function imc (){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('alt').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado')

    if(nome !== '' &&  altura !== '' &&  peso !== ''){
        let valorIMC= (peso / (altura * altura)).toFixed(2)
        
        let classificacao = '';
        
        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso'
        } else if (valorIMC < 25){
                classificacao = 'com peso ideial'
        }else if (valorIMC < 30 ){
                classificacao = 'Levemente acima do peso'
        }else if (valorIMC < 35){
            classificacao=' com obesidade grau 1'
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau 2 '
        }else{
            classificacao = 'com obesidade grau 3'
        }       
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;
    }else {
        resultado.textContent = 'Preencha todos os campos'
    }
}

 calcular.addEventListener('click' , imc)