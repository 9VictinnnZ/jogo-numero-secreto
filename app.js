// let titulo = document.querySelector('h1');                                                //EVITE FAZER TANTAS FUNÇÕES REPETIDAS OU SEMELHANTES
// titulo.innerHTML = 'Jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';


let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
// contagem inicial de tentativas
let tentativas = 0;


function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag)
campo.innerHTML = texto
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');

function verificarChute() {
    const campoInput = document.querySelector('input');
    const chute = campoInput ? campoInput.value : '';
    // cada vez que o jogador clicar, conta uma tentativa
    tentativas += 1;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `O número secreto era ${numeroSecreto}. Você precisou de ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }

    // limpar campo após cada chute
    LimparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();

    
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function LimparCampo() {
    // obtém o elemento e zera seu valor
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 0;
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log('seu numero secreto é: ' + numeroSecreto);

}