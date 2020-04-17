var listElement = document.querySelector('#app ul')

//var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []
var pre = JSON.parse(localStorage.getItem('list_preço')) || []





function renderTodos() {
    listElement.innerHTML =  ''
    

    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        
        //var linkElement = document.createElement('a')

       // linkElement.setAttribute('href', '#')

        //var pos = todos.indexOf(todo)

        //linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

       // var linkText = document.createTextNode(' vender')

        //linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)

        //todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
     var timeprov = 0
        for (var pos in pre) {
            timeprov += pre[pos]
        }
    res.innerHTML = `O preço do seu time é: ${timeprov}V$`
    
}
renderTodos()

var antonio_t = {nome: 'Antonio Tocunduva', custo: 7, foto: 'antonio_t.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: 'próximo jogo', valorização: 'função'}
var antonio_i = {nome: 'Antonio Inglesi (basca)', custo: 5, foto: 'antonio_i.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: 'próximo jogo', valorização: 'função'}
var diego_g = {nome: 'Diego Garcia (dieguinho)', custo: 9, foto: 'none', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: 'próximo jogo', valorização: 'função'}
var otto_l = {nome: 'Otto Lautert (Ottera)', custo: 4, foto: 'otto_l.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: 'próximo jogo', valorização: 'função'}
var pedro_c = {nome: 'Pedro Caputo (Pedrão)', custo: 3, foto: 'pedro_c.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: 'próximo jogo', valorização: 'função'}
var tiago_r = {nome: 'Tiago Rodrigues (Americano)', custo: 8, foto: 'tiago_r.jpg', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: 'próximo jogo', valorização: 'função'}
var jogador7 = {nome: 'jogador 7', custo: 5, foto: 'none', time: 'outro', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: 'próximo jogo', valorização: 'função'}

var fotoOttomanos = [antonio_t.foto, antonio_i.foto, diego_g.foto, otto_l.foto, pedro_c.foto, tiago_r.foto, jogador7.foto]
var nomesOttomanos =[antonio_t.nome, antonio_i.nome, diego_g.nome, otto_l.nome, pedro_c.nome, tiago_r.nome, jogador7.nome]
var preçosOttomanos = [antonio_t.custo, antonio_i.custo, diego_g.custo, otto_l.custo, pedro_c.custo, tiago_r.custo, jogador7.custo]

var img = fotoOttomanos
var jogadores = nomesOttomanos
var preço = preçosOttomanos

function addTodo(n) {
    var a = jogadores[n]
    var b = preço[n]
    var todoText = a
    var todoText2 = b
    pre.push(todoText2)
    todos.push(todoText)
    mudarLayout(n)
    renderTodos()
    saveToStorage()
    console.log(`o parametro de addTodo é ${n}`)
}



function deleteTodo(n) {
    var pos = todos.indexOf(`${jogadores[n]}`)
    todos.splice(pos, 1)
    pre.splice(pos, 1)
    mudarLayout2(n)
    renderTodos()
    saveToStorage()
    console.log(`o parametro de deletetodo é ${n}`)
}


function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
    localStorage.setItem('list_preço', JSON.stringify(pre))
}

var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
function mudarLayout(n){
    var botão = document.querySelector(`div#${letras[n]} button`)
    var newbutton = document.createElement('button')
    newbutton.setAttribute('onclick', 'deleteTodo(' + n + ')')
    var textNewbutton = document.createTextNode('vender')
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`div#${letras[n]}`)
    div.appendChild(newbutton)
    div.removeChild(botão)
    console.log(`o parametro de mudar layout 1 é ${n}`)
}
function mudarLayout2(n) {
    var botão = document.querySelector(`div#${letras[n]} button`)
    var newbutton = document.createElement('button')
    newbutton.setAttribute('onclick', 'addTodo(' + n + ')')
    var textNewbutton = document.createTextNode(`${preço[n]}V$`)
    newbutton.appendChild(textNewbutton)
    var div = document.querySelector(`div#${letras[n]}`)
    div.appendChild(newbutton)
    div.removeChild(botão)
    console.log(`o parametro de mudarlayout2 é ${n}`)
}


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
    botão0.appendChild(textbotão0)
    div0.appendChild(botão0)

}else{
    var botão0 = document.createElement('button')
    var textbotão0 = document.createTextNode(`${preço[0]}V$`)
    botão0.setAttribute('onclick', 'addTodo(' + 0 + ')')
    botão0.appendChild(textbotão0)
    div0.appendChild(botão0)
}


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
    botão1.appendChild(textbotão0)
    div1.appendChild(botão1)

}else{
    var botão1 = document.createElement('button')
    var textbotão1 = document.createTextNode(`${preço[1]}V$`)
    botão1.setAttribute('onclick', 'addTodo(' + 1 + ')')
    botão1.appendChild(textbotão1)
    div1.appendChild(botão1)
}



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
    botão2.appendChild(textbotão2)
    div2.appendChild(botão2)

}else{
    var botão2 = document.createElement('button')
    var textbotão2 = document.createTextNode(`${preço[2]}V$`)
    botão2.setAttribute('onclick', 'addTodo(' + 2 + ')')
    botão2.appendChild(textbotão2)
    div2.appendChild(botão2)
}




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
    botão3.appendChild(textbotão3)
    div3.appendChild(botão3)

}else{
    var botão3 = document.createElement('button')
    var textbotão3 = document.createTextNode(`${preço[3]}V$`)
    botão3.setAttribute('onclick', 'addTodo(' + 3 + ')')
    botão3.appendChild(textbotão3)
    div3.appendChild(botão3)
}




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
    botão4.appendChild(textbotão4)
    div4.appendChild(botão4)

}else{
    var botão4 = document.createElement('button')
    var textbotão4 = document.createTextNode(`${preço[4]}V$`)
    botão4.setAttribute('onclick', 'addTodo(' + 4 + ')')
    botão4.appendChild(textbotão4)
    div4.appendChild(botão4)
}




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
    botão5.appendChild(textbotão5)
    div5.appendChild(botão5)

}else{
    var botão5 = document.createElement('button')
    var textbotão5 = document.createTextNode(`${preço[5]}V$`)
    botão5.setAttribute('onclick', 'addTodo(' + 5 + ')')
    botão5.appendChild(textbotão5)
    div5.appendChild(botão5)
}



var div6 = document.querySelector('div#g')

var nome6 = document.createElement('p')
var textnome6 = document.createTextNode(`${jogadores[6]}`)
nome6.appendChild(textnome6)
div6.appendChild(nome6)

/*var img6 = document.createElement('img')
img6.src = `${img[6]}`
img6.width = 70
img6.height = 90
div6.appendChild(img6)*/

if (todos.indexOf(jogadores[6])!= -1){
    var botão6 = document.createElement('button')
    var textbotão6 = document.createTextNode('vender')
    botão6.setAttribute('onclick', 'deleteTodo(' + 6 + ')')
    botão6.appendChild(textbotão6)
    div6.appendChild(botão6)

}else{
    var botão6 = document.createElement('button')
    var textbotão6 = document.createTextNode(`${preço[6]}V$`)
    botão6.setAttribute('onclick', 'addTodo(' + 6 + ')')
    botão6.appendChild(textbotão6)
    div6.appendChild(botão6)
}



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