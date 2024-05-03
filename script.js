// let let01 = "Nada";//atribui o valor de de nada ao let de nome var01
// function nada() {
//     let let01 = "nadão";
//     let var02 = "...";
// }

// var var02 = "nenhum";//atribui o valor de nenhum a var de nome var02
// function nada0() {
//     var var02 = "nadinha";
//     var var03 = "NãoAconteceNada"
// }

/*console.log("Funciona");

//Mesma coisa que console.log
window.console.log("Pelo Window");

//window.history.back - volta a página 

window.location.href = "eteab.com.br";
console.log(window.location.href);//exibe um link para um site espeficicado

console.log(window.navigator.language);//define a linguagme do navegador

console.log(window.navigator.platform);//quando uma página irá se fechar

console.log(window.navigator.userAgent);

window.document;//acessar o html da página e alterá-lo

console.log(window.screen.width);
console.log(window.screen.width);//pegar o valor acesso ao escrem retornar o valor da altura ou largura

////DOM

// console.log(document);//não precisa de windows, faz a mesma função
// console.log(document,head);//navegar pela estrutura
// console.log(document.body);//consegue acessar e alterar partes específicas do código

console.log(document.body.children); //mostra uma lista de elementos presentes no html, pais e filhos, consecutivamente


let titulo = document.body.children[0];//o  título é o filho número 0 do body
console.log(titulo); //retorna o títuloi

let lista = document.body.children[1];//números fazem referência ás crianças daquele pai, no caso da lista é  o body
console.log(lista);//retorna a lista

console.log(lista.firstElementChild);//retorna o primeiro elemento
console.log(lista.lastElementChild);//retorna o último elemento

console.log(lista.parentElement);//retorna o pai daquele elemento, no caso da lista o body

console.log(document.getElementById("listinha").children);//direciona a primeira tag que têm o valor daquela id, ainda consegue ver os filhos dela
console.log(document.getElementById("item01"));//retorna o valor daquela id específica

let listaOrdenada = document.querySelectorAll(".ordenada");//retorna quantas listas ordenadas tiver, utilizando classe use "." antes do valor da mesma
console.log(listaOrdenada);//retorna aquela lista que tem o valor da tag específica

console.log(document.querySelectorAll("#listinha"));//uma forma mais encurtada de fazer
console.log(document.querySelectorAll(".ordenada"));//para ids use "*"




valueN = "Asssim?"; //isso seria considerado uma variável global, 
//Quando você declara uma variável com var sem usar a palavra-chave var , ela é atribuída ao escopo global do navegador. 
console.log(valueN);
 //Isso pode resultar em bugs ao tentar reutilizar nomes de variáveis em diferentes partes do código

let valueN = document.body.children[0];//o  título é o filho número 0 do body
console.log(valueN); */

// function nada() {
//     let varlueN = h1n1;
// }


console.log(document.querySelectorAll(".ordenada"));//retorna a árvore 
console.log(document.querySelector(".ordenada"));//retorna o primeiro valor que identificar

console.log(document.querySelector(".ordenada").matches(".ordenada"));//pergunta se ele tem a classe ordenada, pergunta se ele tem aquele valor

let lista = document.querySelector(".ordenada");//define a variável com aquele valor 
console.log(lista.matches("#listinha"));//pergunta se aquela variável(lista) tem aquele valor(listinha)

console.log(document.getElementsByTagName("h1"));//retorna todos os elementos que tem o nome daquela tag
console.log(document.getElementsByClassName("ordenada"));//retorna aquela classe, não precisa de ponto pois já identifica como lista

let titulo = document.getElementById("titulo");
titulo.innerHTML = "<i>Mudei</i>";//muda o título, além de alterar o html diretamente
titulo.innerText = "<i>Mudei</i>";//não identifica como o html da página

let logo = document.querySelectorAll("img")[0];//pega o primeiro valor da árvore e adiciona na variável
logo.setAttribute("alt", "Logo da ETECAB");//adiciona os valore aos atributos inexistentes
console.log(logo.getAttribute("alt")); //pergunta se ele tem os valores daquela tag
logo.removeAttribute("alt");//remove aquele atributo

titulo.classList.add("vermelho");//adiciona aquela classe
titulo.classList.remove("vermelho");//remove aquela classe
titulo.classList.contains("roxo");//pergunta se ele tem aquela classe 
titulo.classList.toggle("negrito");//if ele tiver aquela classe ele remove, else ele adiciona

let paragrafo = document.getElementById("paragrafo01");//dentro daquele documento pegue aquele elemento identificado por id especificado dentro do parentêses
paragrafo.style.fontSize = "40px"; //pode alterar diretamente os componetes, no caso o tamanho da fonte
paragrafo.style.color = "green"; //altera a cor daquele elemento
paragrafo.style.marginLeft = "100px";//altera a margem do conteúdo daquela tag indicada

//CRIANDO ELEMENTOS NO HTML PELO JS
let titulo02 = document.createElement("h2");//adiciona o h2 na var titulo02
titulo02.innerText = "...";

let paragrafo = document.getElementById("base");//adiciona dentro da tag, adiciona o titulo dentro da tag p
paragrafo.append(titulo02);//adiciona dentro da tag em baixo do elemento
paragrafo.prepend(titulo02);//adiciona dentro da tag em cima do elemento, adiciona dentro de um elemento existente

paragrafo.before(titulo02);//adiciona o titulo antes do elemento usado de base
paragrafo.after(titulo02);//adiciona o titulo depois do elemento 

titulo02.remove();//remove aquele elemento 


//EXEMPLO LISTA
let tarefas = document.getElementById("tarefas");

let item = document.getElementById("li");
item.innerText = "Chegar no hoajsrfkjhsafkdjhsdf";

tarefas.append(item);
tarefas.prepend(item);










