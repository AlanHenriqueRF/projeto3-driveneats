let nome_comida = '';
let nome_bebida = '';
let nome_doce = '';
let preco = 0;

function valida_selecao() {
    if (nome_comida !== '') {
        if (nome_bebida !== '') {
            if (nome_doce !== '') {
                const botaofinalizar = document.querySelector('.botao');
                console.log(botaofinalizar.innerHTML)
                botaofinalizar.innerHTML = '<p class="roboto">Pedido finalizado</p>'
                botaofinalizar.classList.add('finalizar_pedido');
                
            }
        }
    }
}

function selecionacomi(elemento){
    const selecao = document.querySelector('.selecionadocomi');
    if (selecao !== null){
        selecao.classList.remove('selecionadocomi');
        selecao.classList.add('esconde');
    }
    
    const comida = document.querySelector(elemento);
    comida.classList.add("selecionadocomi")
    comida.classList.remove('esconde')

    nome_comida = comida.innerHTML;
    preco = preco+ Number((nome_comida.slice(nome_comida.indexOf('h5')+23,(nome_comida.slice(comida.indexOf('h5'))).slice('<'))))
    // return(document.querySelector('.final_pedido .roboto'))
    valida_selecao()
}

function selecionabebi(elemento){
    const selecao = document.querySelector('.selecionadobebi');
    if (selecao !== null){
        selecao.classList.remove('selecionadobebi')
        selecao.classList.add('esconde')
    }
    
    const comida = document.querySelector(elemento);
    comida.classList.add("selecionadobebi")
    comida.classList.remove('esconde')
    nome_bebida = comida.innerHTML;
    valida_selecao()
}


function selecionadoce(elemento){
    const selecao = document.querySelector('.selecionadodoce');
    if (selecao !== null){
        selecao.classList.remove('selecionadodoce')
        selecao.classList.add('esconde')
    }
    
    const comida = document.querySelector(elemento);
    comida.classList.add("selecionadodoce")
    comida.classList.remove('esconde')
    nome_doce = comida.innerHTML;
    valida_selecao()
}

// const elemento = document.querySelector(".menu");
// elemento.classList.add("espaco");