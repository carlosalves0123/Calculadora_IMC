let nome = document.querySelector("#nome");
let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");
let botao = document.querySelector("#calcular");
let resultado = document.querySelector(".resultado")

function calcularImc(){
    if (nome.value !== '' && altura.value !== '' && peso.value !== ''){
        let IMC = parseFloat(peso.value / (altura.value * altura.value)).toFixed(2)
        console.log(IMC)

        let classificacao = '';

        if (IMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (IMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (IMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (IMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (IMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        // resultado.innerHTML = ('textarea', `Olá ${nome.value} seu IMC é de ${IMC}, você esta ${classificacao}`);
        resultado.innerHTML = ('#texto', `Olá ${nome.value} seu IMC é de ${IMC}, você esta ${classificacao}`)
    }else {
        resultado.innerHTML = ("Preencha Todos os Campos")
    }
}

botao.addEventListener("click", calcularImc)