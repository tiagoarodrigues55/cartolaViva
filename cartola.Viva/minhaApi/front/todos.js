//import criarElemento from './dom'
var listElement = document.querySelector('#app ul')

//var inputElement = document.querySelector('#nome').value
var buttonElement = document.querySelector('#app button')

var Ottomanos = JSON.parse(localStorage.getItem('object_Ottomanos')) || {}
var todos = JSON.parse(localStorage.getItem('list_nomesjog')) || []
var pre = JSON.parse(localStorage.getItem('list_preço')) || []
var ids = JSON.parse(localStorage.getItem('list_id')) || []
var usuarios = JSON.parse(localStorage.getItem('list_usuarios')) || []
var emails = JSON.parse(localStorage.getItem('list_emails')) || []
var senhas = JSON.parse(localStorage.getItem('list_senhas')) || []


//escolherConfronto(Ottomanos, Time2)


function renderTodos() {
    listElement.innerHTML =  ''
    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
     var timeprov = 0
        for (var pos in pre) {
            timeprov += pre[pos]
        }
    res.innerHTML = `O preço do seu time é: ${timeprov}V$`
    
}
renderTodos()




/*                                                                                                                                                                                                                                                                   
var a = [];
var img = [];
var jogadores = [];
var preço = [];

function escolherConfronto(nomeDoTime1, nomeDoTime2) {
  a = nomeDoTime1.img;
  a = nomeDoTime2.img.map(function (item) {
    return a.push(item);
  });
  img = nomeDoTime1.img;
  a = nomeDoTime1.jogadores;
  a = nomeDoTime2.jogadores.map(function (item) {
    return a.push(item);
  });
  jogadores = nomeDoTime1.jogadores;
  a = nomeDoTime1.preço;
  a = nomeDoTime2.preço.map(function (item) {
    return a.push(item);
  });
  preço = nomeDoTime1.preço;
  a = nomeDoTime1.id;
  a = nomeDoTime2.id.map(function (item) {
    return a.push(item);
  });
  id = nomeDoTime1.id;
}*/
var img = Ottomanos.img
var jogadores = Ottomanos.jogadores
var preço = Ottomanos.preço
var id = Ottomanos.nomes


function addTodo(n) {
    var a = jogadores[n]
    var b = preço[n]
    var c = id[n].id
    var todoText = a
    var todoText2 = b
    pre.push(todoText2)
    todos.push(todoText)
    ids.push(c)
    mudarLayout(n)
    renderTodos()
    saveToStorage()
    console.log(`o parametro de addTodo é ${n}`)
}



function deleteTodo(n) {
    var pos = todos.indexOf(`${jogadores[n]}`)
    todos.splice(pos, 1)
    pre.splice(pos, 1)
    ids.splice(pos, 1)
    mudarLayout2(n)
    renderTodos()
    saveToStorage()
    console.log(`o parametro de deletetodo é ${n}`)
}


function saveToStorage() {
    localStorage.setItem('list_nomesjog', JSON.stringify(todos))
    localStorage.setItem('list_id', JSON.stringify(ids))
    localStorage.setItem('list_preço', JSON.stringify(pre))
    localStorage.setItem('object_Ottomanos', JSON.stringify(Ottomanos))
   // localStorage.setItem('nome', JSON.stringify(nomes))
}

var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']
function mudarLayout(n){
    document.querySelector(`button#${letras[n]}`).remove()
    var newbutton = document.createElement('button')
    newbutton.setAttribute('id', `${letras[n]}`)
    newbutton.setAttribute('onclick', 'deleteTodo(' + n + ')')
    newbutton.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    var textNewbutton = document.createTextNode('vender')
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`div#${letras[n]}`)
    div.appendChild(newbutton)
    
    console.log(`o parametro de mudar layout 1 é ${n}`)
}
function mudarLayout2(n) {
    document.querySelector(`button#${letras[n]}`).remove()
    var newbutton = document.createElement('button')
    newbutton.setAttribute('id', `${letras[n]}`)
    newbutton.setAttribute('onclick', 'addTodo(' + n + ')')
    newbutton.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    var textNewbutton = document.createTextNode(`${preço[n]}V$`)
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`div#${letras[n]}`)
    div.appendChild(newbutton)
    
    console.log(`o parametro de mudarlayout2 é ${n}`)
}

function lerMais(n){
    
    document.querySelector(`#lerMais${n}`).remove()
    criarElemento('button', `lerMenos${n}`, 'Menos informações', `lerMenos(${n})`, `${letras[n]}2`)
    criarElemento('div', `div${n}`, '', '', `${letras[n]}2`)
    criarElemento('p', '', `Media: ${Ottomanos.nomes[n].media}`, '', `div${n}`)
    criarElemento('p', '', `Ultima pontuação: ${Ottomanos.nomes[n].ultimapontuação}`, '', `div${n}`)
    criarElemento('p', '', `Valorização: ${Ottomanos.nomes[n].valorização}`, '', `div${n}`)
    
}
function lerMenos(n){
document.querySelector(`#div${n}`).remove()
document.querySelector(`#lerMenos${n}`).remove()
criarElemento('button', `lerMais${n}`, 'Mais informações', `lerMais(${n})`, `${letras[n]}2`)
}

//Criar cartola.html

var div0 = document.querySelector('div#a')
var nome0 = document.createElement('p')
var textnome0 = document.createTextNode(`${jogadores[0]}`)
nome0.appendChild(textnome0)
div0.appendChild(nome0)

var img0 = document.createElement('img')
img0.src = `${img[0]}`
img0.width = 70
img0.height = 90
div0.appendChild(img0)

if (todos.indexOf(jogadores[0])!= -1){
    var botão0 = document.createElement('button')
    var textbotão0 = document.createTextNode('vender')
    botão0.setAttribute('onclick', 'deleteTodo(' + 0 + ')')
    botão0.setAttribute('id', 'a')
    botão0.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão0.appendChild(textbotão0)
    div0.appendChild(botão0)

}else{
    var botão0 = document.createElement('button')
    var textbotão0 = document.createTextNode(`${preço[0]}V$`)
    botão0.setAttribute('onclick', 'addTodo(' + 0 + ')')
    botão0.setAttribute('id', 'a')
    botão0.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão0.appendChild(textbotão0)
    div0.appendChild(botão0)
}
criarElemento('br', '', '', '', 'a2')
criarElemento('button', 'lerMais0', 'Mais informações', 'lerMais(0)', 'a2')


var div1 = document.querySelector('div#b')

var nome1 = document.createElement('p')
var textnome1 = document.createTextNode(`${jogadores[1]}`)
nome1.appendChild(textnome1)
div1.appendChild(nome1)

var img1 = document.createElement('img')
img1.src = `${img[1]}`
img1.width = 70
img1.height = 90
div1.appendChild(img1)


if (todos.indexOf(jogadores[1])!= -1){
    var botão1 = document.createElement('button')
    var textbotão1 = document.createTextNode('vender')
    botão1.setAttribute('onclick', 'deleteTodo(' + 1 + ')')
    botão1.setAttribute('id', 'b')
    botão1.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão1.appendChild(textbotão1)
    div1.appendChild(botão1)

}else{
    var botão1 = document.createElement('button')
    var textbotão1 = document.createTextNode(`${preço[1]}V$`)
    botão1.setAttribute('onclick', 'addTodo(' + 1 + ')')
    botão1.setAttribute('id', 'b')
    botão1.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão1.appendChild(textbotão1)
    div1.appendChild(botão1)
}

criarElemento('br', '', '', '', 'b2')
criarElemento('button', 'lerMais1', 'Mais informações', 'lerMais(1)', 'b2')

var div2 = document.querySelector('div#c')

var nome2 = document.createElement('p')
var textnome2 = document.createTextNode(`${jogadores[2]}`)
nome2.appendChild(textnome2)
div2.appendChild(nome2)

/*var img2 = document.createElement('img')
img2.src = `${img[2]}`
img2.width = 70
img2.height = 90
div2.appendChild(img2)*/


if (todos.indexOf(jogadores[2])!= -1){
    var botão2 = document.createElement('button')
    var textbotão2 = document.createTextNode('vender')
    botão2.setAttribute('onclick', 'deleteTodo(' + 2 + ')')
    botão2.setAttribute('id', 'c')
    botão2.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão2.appendChild(textbotão2)
    div2.appendChild(botão2)

}else{
    var botão2 = document.createElement('button')
    var textbotão2 = document.createTextNode(`${preço[2]}V$`)
    botão2.setAttribute('onclick', 'addTodo(' + 2 + ')')
    botão2.setAttribute('id', 'c')
    botão2.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão2.appendChild(textbotão2)
    div2.appendChild(botão2)
}


criarElemento('br', '', '', '', 'c2')
criarElemento('button', 'lerMais2', 'Mais informações', 'lerMais(2)', 'c2')

var div3 = document.querySelector('div#d')

var nome3 = document.createElement('p')
var textnome3 = document.createTextNode(`${jogadores[3]}`)
nome3.appendChild(textnome3)
div3.appendChild(nome3)

var img3 = document.createElement('img')
img3.src = `${img[3]}`
img3.width = 70
img3.height = 90
div3.appendChild(img3)

if (todos.indexOf(jogadores[3])!= -1){
    var botão3 = document.createElement('button')
    var textbotão3 = document.createTextNode('vender')
    botão3.setAttribute('onclick', 'deleteTodo(' + 3 + ')')
    botão3.setAttribute('id', 'd')
    botão3.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão3.appendChild(textbotão3)
    div3.appendChild(botão3)

}else{
    var botão3 = document.createElement('button')
    var textbotão3 = document.createTextNode(`${preço[3]}V$`)
    botão3.setAttribute('onclick', 'addTodo(' + 3 + ')')
    botão3.setAttribute('id', 'd')
    botão3.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão3.appendChild(textbotão3)
    div3.appendChild(botão3)
}
criarElemento('br', '', '', '', 'd2')
criarElemento('button', 'lerMais3', 'Mais informações', 'lerMais(3)', 'd2')




var div4 = document.querySelector('div#e')

var nome4 = document.createElement('p')
var textnome4 = document.createTextNode(`${jogadores[4]}`)
nome4.appendChild(textnome4)
div4.appendChild(nome4)

var img4 = document.createElement('img')
img4.src = `${img[4]}`
img4.width = 70
img4.height = 90
div4.appendChild(img4)


if (todos.indexOf(jogadores[4])!= -1){
    var botão4 = document.createElement('button')
    var textbotão4 = document.createTextNode('vender')
    botão4.setAttribute('onclick', 'deleteTodo(' + 4 + ')')
    botão4.setAttribute('id', 'e')
    botão4.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão4.appendChild(textbotão4)
    div4.appendChild(botão4)

}else{
    var botão4 = document.createElement('button')
    var textbotão4 = document.createTextNode(`${preço[4]}V$`)
    botão4.setAttribute('onclick', 'addTodo(' + 4 + ')')
    botão4.setAttribute('id', 'e')
    botão4.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão4.appendChild(textbotão4)
    div4.appendChild(botão4)
}

criarElemento('br', '', '', '', 'e2')
criarElemento('button', 'lerMais4', 'Mais informações', 'lerMais(4)', 'e2')


var div5 = document.querySelector('div#f')

var nome5 = document.createElement('p')
var textnome5 = document.createTextNode(`${jogadores[5]}`)
nome5.appendChild(textnome5)
div5.appendChild(nome5)

var img5 = document.createElement('img')
img5.src = `${img[5]}`
img5.width = 70
img5.height = 90
div5.appendChild(img5)


if (todos.indexOf(jogadores[5])!= -1){
    var botão5 = document.createElement('button')
    var textbotão5 = document.createTextNode('vender')
    botão5.setAttribute('onclick', 'deleteTodo(' + 5 + ')')
    botão5.setAttribute('id', 'f')
    botão5.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão5.appendChild(textbotão5)
    div5.appendChild(botão5)

}else{
    var botão5 = document.createElement('button')
    var textbotão5 = document.createTextNode(`${preço[5]}V$`)
    botão5.setAttribute('onclick', 'addTodo(' + 5 + ')')
    botão5.setAttribute('id', 'f')
    botão5.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão5.appendChild(textbotão5)
    div5.appendChild(botão5)
}

criarElemento('br', '', '', '', 'f2')
criarElemento('button', 'lerMais5', 'Mais informações', 'lerMais(5)', 'f2')

var div6 = document.querySelector('div#g')

var nome6 = document.createElement('p')
var textnome6 = document.createTextNode(`${jogadores[6]}`)
nome6.appendChild(textnome6)
div6.appendChild(nome6)

var img6 = document.createElement('img')
img6.src = `${img[6]}`
img6.width = 70
img6.height = 90
div6.appendChild(img6)


if (todos.indexOf(jogadores[6])!= -1){
    var botão6 = document.createElement('button')
    var textbotão6 = document.createTextNode('vender')
    botão6.setAttribute('onclick', 'deleteTodo(' + 6 + ')')
    botão6.setAttribute('id', 'g')
    botão6.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão6.appendChild(textbotão6)
    div6.appendChild(botão6)

}else{
    var botão6 = document.createElement('button')
    var textbotão6 = document.createTextNode(`${preço[6]}V$`)
    botão6.setAttribute('onclick', 'addTodo(' + 6 + ')')
    botão6.setAttribute('id', 'g')
    botão6.setAttribute('style', 'position: relative; bottom: -5px; left: 20px;')
    botão6.appendChild(textbotão6)
    div6.appendChild(botão6)
}

criarElemento('br', '', '', '', 'g2')
criarElemento('button', 'lerMais6', 'Mais informações', 'lerMais(6)', 'g2')
//fechar time
function verificar(){
    var timeprov = 0
        for (var pos in pre) {
            timeprov += pre[pos]
        }
    var divfechar = document.querySelector('div#fechar')
    if (todos.length == 5){
        if (timeprov<30){
            var linkFechar = document.createElement('a')
            var linkText = document.createTextNode('Fechar time')
            linkFechar.setAttribute('href', 'fecharTime.html')
            linkFechar.appendChild(linkText)
            divfechar.appendChild(linkFechar)

        }else{
            alert('Seu time está muito caro')
        }
    }else{
        alert('Seu time precisa ter 5 jogadores!')
    }
}

function criarElemento(elemento, id, txt, função, endereçoId){
  if (elemento === 'button'){
    let endereço = document.getElementById(endereçoId)
    let nome = document.createElement(elemento)
    nome.appendChild(document.createTextNode(txt))
    nome.setAttribute('id', id)
    nome.setAttribute('onclick', função)
    endereço.appendChild(nome)
  }else{
    if (elemento === 'input'){
      let endereço = document.getElementById(endereçoId)
      let nome = document.createElement(elemento)
      nome.setAttribute('placeholder', txt)
      nome.setAttribute('id', id)
      nome.setAttribute('type', função)
      endereço.appendChild(nome)
    }else{
      if (elemento === 'a'){
        let endereço = document.getElementById(endereçoId)
        let nome = document.createElement(elemento)
        nome.setAttribute('href', função)
        nome.setAttribute('id', id)
        nome.appendChild(document.createTextNode(txt))
        endereço.appendChild(nome)
      }else{
        if(elemento === 'img'){
          let endereço = document.getElementById(endereçoId)
          let nome = document.createElement(elemento)
          nome.setAttribute('src', txt)
          nome.setAttribute('style', função)
          nome.setAttribute('id', id)
          nome.appendChild(document.createTextNode(txt))
          endereço.appendChild(nome)
        }else{
          let endereço = document.getElementById(endereçoId)
          let nome = document.createElement(elemento)
          nome.appendChild(document.createTextNode(txt))
          nome.setAttribute('id', id)
          endereço.appendChild(nome)
        }
      }
    }
  }
}






