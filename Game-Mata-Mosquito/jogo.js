
//===========================Variáveis Globais===========================
var altura;
var largura;
var vidas = 1;
var tempo = 10;
var criaMosquitoTempo = 1500;

var cronometro = setInterval(function() {

	tempo--

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		document.getElementById('mosquito').remove();
		window.location.href='vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel == 'normal') { criaMosquitoTempo = 1500 }
if(nivel == 'dificil') { criaMosquitoTempo = 1000 }
if(nivel == 'extremeHard') { criaMosquitoTempo = 750 }

//===============================Funções=================================
function ajustaTamanhoPalcoJogo() {

	//Calcular tamanho maximo da pagina em questao
	altura = window.innerHeight
	largura = window.innerWidth

}
//Chamar funcao de cima para definir a posicao randomica
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

	//Remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove();

		if(vidas > 3) {
			window.location.href='fim_de_jogo.html'
		} else {
			document.getElementById('vida' + vidas).src = 'imagens/coracao_vazio.png'
			vidas++
		}
	}

	//Gerar randomicamente
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//Posicao negativa (nao aparece para o usuario)
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	

	//Criar elemento HTML imagem do mosquito por JS
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico()
	mosquito.style.position = 'absolute'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	//Adicionar elemento ao BODY
	document.body.appendChild(mosquito)
}



function tamanhoRandomico() {
	
	//Gerar classe randomicamente
	var classe = Math.floor(Math.random()  * 3);

	//Retornar classe
	if(classe == 0) return 'mosquito1'
	if(classe == 1) return 'mosquito2'
	if(classe == 2) return 'mosquito3'
}



function ladoRandomico() {

	//Gerar classe randomicamente
	var classe = Math.floor(Math.random()  * 2);

	//Retornar classe
	if(classe == 0) return 'ladoA'
	if(classe == 1) return 'ladoB'
}