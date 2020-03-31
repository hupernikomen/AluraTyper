# jQuery

* O que foi aprendido ?  
   * `$` - (Dolar) faz buscas através de seletores

   * `text()` - Captura o conteudo de um seletor ou tag sendo tambem possivel alterar o conteudo passando o novo valor por parametro

   Ex.:
   
   ```js
   $('h1').text('Titulo)
   ```
    O exemplo acima captura a tag `h1` e atribue a ela um novo valor 'Titulo'

    * `on e one` - Ele substitui o `addEventListener` usado no javascript como escuta de eventos.

    Ex. 1:
    ```js
    element.on('click', function() {...})
    element.one('click', function() {...})
    ```
    Eles tem a mesma sintaxe, com a diferença de que o `on` executa a primeira escuta de um click e continua ouvindo novos eventos de click no elemento.  
    Ja o `one` executa apenas uma vez o evento de click.  

    * `val()` - O val é basicamente o mesmo `value` do mundo javascript. Usado tanto para capturar valores de inputs, textarea e select, como para atribuir valores pela passagem de paramentros.
