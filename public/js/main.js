var campo = $('.campoDigitacao');
var tempoInicial = $('.tempoDigitacao').text();

$(() => {
   atualizaTamanhoFrase()
   inicializaContadores();
   verificaErro();
   reiniciaJogo();
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



function verificaErro() {
   campo.on('input', () => {
      var frase = $('.frase').text();
      var digitado = campo.val()

      var comparavel = frase.substr(0, digitado.length)
      if (digitado == comparavel) {
         campo.addClass('bordaVerde')
         campo.removeClass('bordaVermelha')
      } else {
         campo.addClass('bordaVermelha')
         campo.removeClass('bordaVerde')
      }
   });
}
// Pdendo tambem ser assim, usando o 'startsWidth' em ECMASCRIPT 6
// if (frase.startsWith(digitado)) {
//    campo.addClass("borda-verde");
// } else {
//    campo.addClass("borda-vermelha");
// }



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
            botaoReinicializa.attr('disabled', false)
            finalizaJogo()
         }
      }, 1000);
   })
}


function finalizaJogo() {
   campo.attr('disabled', true);
   campo.addClass('campoDesativado');
   inserePlacar();
}



function reiniciaJogo() {
   campo.attr('disabled', false);
   campo.val('');
   $("#contadorPalavras").text('0');
   $("#contadorCaracteres").text('0');
   campo.removeClass('campoDesativado');

   $('.tempoDigitacao').text(tempoInicial)
   campo.removeClass('bordaVermelha')
   campo.removeClass('bordaVerde')
   inicializaCronometro()
}

var btnReiniciar = $('#botaoReiniciar')
btnReiniciar.click(reiniciaJogo)
