// esse é um comentário de uma linha
/*

esse é um comentário de várias linhas
*/

/*
OBJETIVO - TROCAR AS IMAGENS DE FUNCO AO CLICAR NOS BOTÕES

ALGORITIMO

PASSO 1 - PEGAR O HTML DOS BOTÊS
PASSO 2 - IDENTIFICAR O CLIQUE DO USUÁRIO NO BOTÃO
PASSO 3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOR
PASSO 4 - MARCAR O PRÓCIMO BOTÃO SELECIONADO
PASSO 5 - ESCONDER A IMAGEM DE FUNDO ANTERIOR
PASSO 6 - MOSTRAR A IMAGEM CORRESPONDENTE DO BOTÃO SELECIONADO
*/

//PASSO 1 - PEGAR O HTML DOS BOTÊS
const botoescarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

//PASSO 2 - IDENTIFICAR O CLIQUE DO USUÁRIO NO BOTÃO
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // PASSO 3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOR
        const botaoselecionado = document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado');

        //PASSO 4 - MARCAR O PRÓCIMO BOTÃO SELECIONADO
        botao.classList.add('selecionado');

        //PASSO 5 - ESCONDER A IMAGEM ATIVA DE FUNDO ANTERIOR
        const imagemativa = document.querySelector('.ativa');
        imagemativa.classList.remove('ativa');

        //PASSO 6 - MOSTRAR A IMAGEM CORRESPONDENTE DO BOTÃO SELECIONADO
        console.log(imagens);
        imagens[indice].classList.add('ativa');
    })
})
