for (i = 0; i<6; i++) {
var a = 
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

var botão0 = document.createElement('button')
var textbotão0 = document.createTextNode(`${preço[0]}V$`)
botão0.setAttribute('onclick', 'addTodo(' + 0 + ')')
botão0.appendChild(textbotão0)
var div0 = document.querySelector('div#a')
div0.appendChild(botão0))

    console.log(a);
}