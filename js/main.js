var largura;
var altura;
var vidas =0
var tempo = 90
var tempoMosca = 1500

var nivel = window.location.search.replace('?','')

if(nivel == 'Normal'){

}
else if(nivel == 'Dificil'){
tempoMosca = 1000
}

function verificaTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}
verificaTela()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        location.href='vitoria.html'
    }else{
    document.getElementById('tempo').innerHTML = tempo
    }
},1000)

getElementById('tempo').value = tempo

function posicaoRandomica(){
if(document.getElementById('mosquito')){
document.getElementById('mosquito').remove()
vidas++
if(vidas < 3){
document.getElementById('v'+vidas).src="imagens/coracao_vazio.png"
}
else{
    window.location.href = 'gameover.html'
}
}
var posicaoX = Math.floor(Math.random() * largura)-90
var posicaoY = Math.floor(Math.random() * altura)-90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

var mosquito = document.createElement('img')
mosquito.src='imagens/mosca.png'
mosquito.className=(tamanhoAleatorio() + ' ' +ladoAleatorio())
mosquito.style.position='absolute'
mosquito.style.left = posicaoX +'px'
mosquito.style.top = posicaoY +'px'
document.body.appendChild(mosquito)
mosquito.id='mosquito'
mosquito.onclick = function(){
    this.remove()
}

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() *3)
    switch(classe){
        case 0:
            return 'tamanhoMosca'
        case 1:
            return 'tamanhoMosca1'
        case 2:
            return 'tamanhoMosca2'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() *2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
