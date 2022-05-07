let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
let quadrados = document.getElementsByClassName('quadrado')

mudarJogador(valor = 'X');

function escolherQuadrado(id) {

    if(vencedor !== null) {
        alert(`GAME OVER! Jogador ${vencedor} ganhou.`)
        return;
    }
    
    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        alert('[ERRO] Esse Quadrado já foi selecionado, tente outro.')
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O'
    }else{
        jogador = 'X'
    }
mudarJogador(jogador);
checarVencedor();
}

function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);


    if(checarSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1)
        return;

    }

    if(checarSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4)
        return;

    }

    if(checarSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7)
        return;

    }

    if(checarSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1)
        return;

    }

    if(checarSequencia(quadrado7, quadrado5, quadrado3)) {
        mudaCorQuadrado(quadrado7, quadrado5, quadrado3);
        mudarVencedor(quadrado7)
        return;

    }

    if(checarSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1)
        return;
    }

    if(checarSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2)
        return;
    }

    if(checarSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3)
          
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}


function checarSequencia(quadrado1, quadrado2, quadrado3) {
    var eIgual = false

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;
    }
    return eIgual
}

function reiniciar(){
    vencedor = null
    vencedorSelecionado.innerHTML = ''

    for(let i = 1; i <= 9; i++){
    let quadrado = document.getElementById(i);
    quadrado.style.background = '#f5f5f5';
    quadrado.style.color = '#f5f5f5';
    quadrado.innerHTML = '-';
    }
    mudarJogador(valor = 'X');
}