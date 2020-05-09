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


function addTodo(x) {
    var n = x-1
    var a = jogadores[n]
    var b = preço[n]
    var c = id[n].id
    var todoText = a
    var todoText2 = b
    pre.push(todoText2)
    todos.push(todoText)
    ids.push(c)
    mudarLayout(n+1)
    renderTodos()
    saveToStorage()
    console.log(`o parametro de addTodo é ${n}`)
}



function deleteTodo(x) {
    var n = x-1
    var pos = todos.indexOf(`${jogadores[n]}`)
    todos.splice(pos, 1)
    pre.splice(pos, 1)
    ids.splice(pos, 1)
    mudarLayout2(n+1)
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
    document.querySelector(`#botão${n}`).remove()
    var newbutton = document.createElement('button')
    newbutton.setAttribute('id', `botão${n}`)
    newbutton.setAttribute('onclick', 'deleteTodo(' + n + ')')
    var textNewbutton = document.createTextNode('vender')
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`#div${n}`)
    div.appendChild(newbutton)
    
    console.log(`o parametro de mudar layout 1 é ${n}`)
}
function mudarLayout2(n) {
    document.querySelector(`#botão${n}`).remove()
    var newbutton = document.createElement('button')
    newbutton.setAttribute('id', `botão${n}`)
    newbutton.setAttribute('onclick', 'addTodo(' + n + ')')
    var textNewbutton = document.createTextNode(`${preço[n-1]}V$`)
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`#div${n}`)
    div.appendChild(newbutton)
    
    console.log(`o parametro de mudarlayout2 é ${n}`)
}

function lerMais(n){
    
    document.querySelector(`#lerMais${n}`).remove()
    criarElemento('button', `lerMenos${n}`, 'Menos informações', `lerMenos(${n})`, `div${n}2`)
    criarElemento('div', `div${n}3`, '', '', `div${n}2`)
    criarElemento('p', '', `Media: ${Ottomanos.nomes[n-1].media}`, '', `div${n}3`)
    criarElemento('p', '', `Ultima pontuação: ${Ottomanos.nomes[n-1].ultimapontuação}`, '', `div${n}3`)
    criarElemento('p', '', `Valorização: ${Ottomanos.nomes[n-1].valorização}`, '', `div${n}3`)
    
}
function lerMenos(n){
document.querySelector(`#div${n}3`).remove()
document.querySelector(`#lerMenos${n}`).remove()
criarElemento('button', `lerMais${n}`, 'Mais informações', `lerMais(${n})`, `div${n}2`)
}


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
var jog = []
axios.get('http://localhost:3000/jogadores')
.then(response => {
    jog = response.data
    criarPg(jog)
})
.catch(error => console.log(error))
function criarPg(jog){
for (i of jog){
    criarElemento('section', `section${i.id}`, '', '', 'jogadores')
    criarElemento('div', `div${i.id}`, '', '', `section${i.id}`)
    criarElemento('div', `div${i.id}2`, '', '', `section${i.id}`)
    criarElemento('p', '', `${i.name}`, '', `div${i.id}`)
    criarElemento('img', '', `${i.img}`, 'width: 70px; height: 90px;', `div${i.id}`)
    if (ids.indexOf(i.id)!= -1){
        criarElemento('button', `botão${i.id}`, 'vender', `deleteTodo(${i.id})`, `div${i.id}`)
    }else{
        criarElemento('button', `botão${i.id}`, `${i.preço}`, `addTodo(${i.id})`, `div${i.id}`)
    }
    criarElemento('br', '', '', '', `div${i.id}2`)
    criarElemento('button', `lerMais${i.id}`, 'Ler mais', `lerMais(${i.id})`, `div${i.id}2`)
    criarElemento('br', '', '', '', `jogadores`)
}
}




