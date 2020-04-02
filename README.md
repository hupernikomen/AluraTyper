# jQuery

## O que foi aprendido ?  

<br>

* `$` - (Dolar) faz buscas através de seletores

<br>

* `text()` - Captura o conteudo de um seletor ou tag sendo tambem possivel alterar o conteudo passando o novo valor por parametro
```js
$('h1').text('Titulo')
```
O exemplo acima captura a tag `h1` e atribue a ela um novo valor 'Titulo'

<br>

* `on e one` - Ele substitui o `addEventListener` usado no javascript como escuta de eventos.
```js
element.on('click', function() {...})
element.one('click', function() {...})
```
Eles tem a mesma sintaxe, com a diferença de que o `on` executa a primeira escuta de um click e continua ouvindo novos eventos de click no elemento.  
Ja o `one` executa apenas uma vez o evento de click.  

<br>

* `val()` - O val é basicamente o mesmo `value` do mundo javascript. Usado tanto para capturar valores de inputs, textarea e select, como para atribuir valores pela passagem de paramentros.

<br>

* `.attr()` - Atualiza atributos de elementos
 
```js
element.attr('disabled', true) // habilita o disabled no elemento selecionado
```   
<br>


* `$(function() { ... }` - Inicializa funções assim que a pagina é carregada 

<br>

* `.click` - Uma forma mais curta de utilizar escuta de eventos como `focus`, `dbclick`, `input`, etc. 


```js
btn.click(function() {...})
campo.focus(function() {...})
```

<br>

* `addClass` e `removeClass` - Adiciona e remove classes nos elementos.
Tem também o `toggleClass` que faz um "liga/desliga" da class, adiciona e remove a cada execução.
```js
element.addClass('classe')
element.removeClass('classe')
element.toggleClass('classe') // a cada execução, adiciona e remove a classe
```

<br>

* `substr()` - Recebe 2 parametros para contagem de caracteres da String monitorada
sendo o primeiro parametro o index do caractere inicial, e o segundo parametro do index final da String.
```js
let string = paralelepipedo;

let resultado1 = string.substr(0, 6)
let resultado2 = string.substr(2, 8)

console.log(resultado1) // parale
console.log(resultado2) // ralelepi
```
