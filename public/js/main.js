var campo = $('.campoDigitacao');
var tempoInicial = $('.tempoDigitacao').text();

$(() => {
   atualizaTamanhoFrase()
   inicializaContadores();
   reiniciaJogo()
})

function atualizaTamanhoFrase() {
   var frase = $('.frase').text();
   var numPalavras = frase.split(' ').length;
   var tamanhoFrase = $('.tamanhoFrase');
   tamanhoFrase.text(numPalavras);
}



function inicializaContadores() {
   campo.on('input', () => {
      var conteudo = campo.val()
      var qtdPalavras = conteudo.split(/\S+/).length - 1;
      $("#contadorPalavras").text(qtdPalavras);

      var qtdCaracteres = conteudo.length;
      $("#contadorCaracteres").text(qtdCaracteres);
   });
}



function inicializaCronometro() {
   campo.one('focus', () => {
      var tempoRestante = $('.tempoDigitacao').text();
      var botaoReinicializa = $('#botaoReiniciar');
      botaoReinicializa.attr('disabled', true);

      var cronometroID = setInterval(() => {
         tempoRestante--;

         $('.tempoDigitacao').text(tempoRestante);
         if (tempoRestante < 1) {
            clearInterval(cronometroID);
            campo.attr('disabled', true);
            botaoReinicializa.attr('disabled', false)
            campo.addClass('campoDesativado');
         }
      }, 1000);
   })
}



function reiniciaJogo() {
   campo.attr('disabled', false);
   campo.val('');
   $("#contadorPalavras").text('0');
   $("#contadorCaracteres").text('0');
   campo.removeClass('campoDesativado');

   $('.tempoDigitacao').text(tempoInicial)
   inicializaCronometro()
}

var btnReiniciar = $('#botaoReiniciar')
btnReiniciar.click(reiniciaJogo)
