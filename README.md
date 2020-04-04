# jQuery


[Link do Curso no site da Alura](https://cursos.alura.com.br/course/jquery-a-biblioteca-do-mercado)  


## O que vimos neste curso ?  


1. `$` - (Dolar)  
Usado para capturar elementos no DOM com buscas por seletores, uma forma mais enxuta que o JS que utilizava da `document.querySelector`, 
o `$` faz exatamente o mesmo trabalho
```js
$('h1')
```

<br>

2. `text()`  
Quando utilizado sem passagem de paramentos o `text()` retorna o conteudo do elemento. Ja se passarmos um parametro com algum valor, o elemento recebe esse valor como seu novo conteudo.  

```js
$('h1').text('Titulo') // Captura a tag `h1` e atribui a ela o valor 'Titulo'
```
<br>

3. `on e one`  
Ele substitui o `addEventListener` usado no javascript como escuta de eventos.  
A mesma sintaxe, com a diferença de que o `on` executa a primeira escuta de um click e continua ouvindo novos eventos de click no elemento.  
Ja o `one` executa apenas uma vez o evento de click.  
```js
element.on('click', function() {...})
element.one('click', function() {...})
```
<br>

4. `val()`  
O val é basicamente o mesmo `value` do mundo javascript. Usado tanto para capturar valores de inputs, textarea e select, como para atribuir valores pela passagem de paramentros.

<br>

5. `.attr()`  
Atualiza atributos de elementos
 
```js
element.attr('disabled', true) // habilita o disabled no elemento selecionado
```   

<br>

6. `$(function() { ... }`  
Inicializa funções assim que a pagina é carregada 

<br>

7. `.click`  
Uma forma mais curta de utilizar escuta de eventos como `focus`, `dbclick`, `input`, etc. 

```js
btn.click(function() {...})
campo.focus(function() {...})
```

<br>

8. `addClass` e `removeClass`  
Adiciona e remove classes nos elementos.  
Tem também o `toggleClass` que faz um "liga/desliga" da class, adiciona e remove a cada execução.
```js
element.addClass('classe')
element.removeClass('classe')
element.toggleClass('classe') // a cada execução, adiciona e remove a classe
```

<br>

9. `substr()`  
Recebe 2 parametros para contagem de caracteres da String monitorada sendo o primeiro parametro o index do caractere inicial, e o segundo parametro do index final da String.
```js
let string = paralelepipedo;

let resultado1 = string.substr(0, 6)
let resultado2 = string.substr(2, 8)

console.log(resultado1) // parale
console.log(resultado2) // ralelepi
```

<br>

10. `css()`  
Retorna ou atribui valores css para o elemento. Para capturar determinado atributo css de um elemento usamos: 

```html
<div style='width: 300'></div>
```
```js
var largura = $('div').css('width')
console.log(largura) // 300
```


