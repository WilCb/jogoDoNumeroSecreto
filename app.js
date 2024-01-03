let listaDeNumeros = []

let valor = document.querySelector('input');
let reiniciar = document.getElementById('reiniciar');
valor.focus();

function numeroAleatorio() {
    let numeroGerado = Math.round(Math.random() * 9 + 1);

    if (listaDeNumeros.includes(numeroGerado)) {
        return numeroAleatorio();
    } else {
        listaDeNumeros.push(numeroGerado);
        if (listaDeNumeros.length == 10) {
            listaDeNumeros = [];
        }
        return numeroGerado;
    }
}


let numeroSecreto = numeroAleatorio();

function escreveNaTela(tag, texto) {
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

escreveNaTela('h1', 'Jogo do número secreto!');
escreveNaTela('p', 'Escolha um número entre 1 - 10');

let tentativa = 1;
function chute() {
    const palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
    if (valor.value == numeroSecreto) {
        escreveNaTela('h1', 'Acertou');
        escreveNaTela('p', `Parabéns, você acertou o número secreto com ${tentativa} ${palavraTentativa}!`);
        reiniciar.removeAttribute('disabled');
    } else {
        if (valor.value < numeroSecreto) {
            escreveNaTela('p', 'O número é maior');
        } else {
            escreveNaTela('p', 'O número é menor');
        }
    }
    tentativa++;
    valor.value = '';
    valor.focus();
}

function resete() {
    numeroSecreto = numeroAleatorio();
    tentativa = 1;
    escreveNaTela('h1', 'Jogo do número secreto!');
    escreveNaTela('p', 'Escolha um número entre 1 - 10');
}
reiniciar.onclick = resete