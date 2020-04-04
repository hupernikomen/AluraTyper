
function inserePlacar() {
   var corpoTabela = $('.placar').find('tbody');
   var usuario = 'Wilson';
   var numPalavras = $('#contadorPalavras').text();

   var linha = novaLinha(usuario, numPalavras);
   linha.find('.botaoRemover').click(removeLinha);

   corpoTabela.prepend(linha);
}


function novaLinha(usuario, palavras) {
   var linha = $('<tr>');
   var colunaUsuario = $('<td>').text(usuario);
   var colunaPalavras = $('<td>').text(palavras);
   var colunaRemover = $('<td>');
   var link = $('<a>').addClass('botaoRemover').attr('href', '#');
   var icone = $('<i>').addClass('small').addClass('material-icons').text('delete')

   link.append(icone);
   colunaRemover.append(link);

   linha.append(colunaUsuario);
   linha.append(colunaPalavras);
   linha.append(colunaRemover);

   return linha;

}

function removeLinha() {
      event.preventDefault();
      $(this).parent().parent().remove();
}

