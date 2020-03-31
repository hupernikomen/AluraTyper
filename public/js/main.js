var frase = $('.frase').text();
var tamanhoFrase = $('.tamanhoFrase');

var numPalavras = frase.split(' ').length;
tamanhoFrase.text(numPalavras);

var campo = $('.campoDigitacao');
campo.on('input', ()=> {

   var conteudo = campo.val()
   var qtdPalavras = conteudo.split(/\S+/).length - 1;
   $("#contadorPalavras").text(qtdPalavras);

   var qtdCaracteres = conteudo.length;
   $("#contadorCaracteres").text(qtdCaracteres);

})

campo.one('focus', ()=> {
   var tempoRestante = $('.contagemTempo').text();
   
   var cronometroID = setInterval(()=> {
      tempoRestante--;
      $('.contagemTempo').text(tempoRestante);
      if (tempoRestante < 1) {
         clearInterval(cronometroID);
         campo.attr('disabled', true);
      }
   }, 1000);

 
})


