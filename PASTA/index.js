const { botoesCarrossel, informacao, imagens } = pegarElementosDoHtml();

//- 2 - dar um jeito de identificar o clique do usuário no botão
    botoesCarrossel.forEach((botao, indice) => { 
    botao.addEventListener('click', () => {


        desativarBotaoSelecionado();


        marcarBotaoSelecionado(botao);


        esconderImagemAtiva();


        mostrarImagemDeFundo(indice);


        escondendoInformacaoAtivas();


        mostrarInformacao(indice);


    });
});





function pegarElementosDoHtml() {
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem');
    const informacao = document.querySelectorAll('.informacao');
    return { botoesCarrossel, informacao, imagens };
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarInformacao(indice) {
    informacao[indice].classList.add('ativa');
}

function escondendoInformacaoAtivas() {
    const informacaoAtiva = document.querySelector('.informacao.ativa');
    informacaoAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}