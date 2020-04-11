


var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var e = document.getElementById("e")
var e = document.getElementById("f")
var e = document.getElementById("g")
var time = []
let res = document.getElementById('res')
let lista = document.getElementById('lista')
let res2 = document.getElementById('res2')
let preço2 = document.getElementById('preço2')
let pre = []
function comprar(n) {
    let preço = [7, 5, 9, 4, 3, 8, 5]
    let jog = ['Antonio Tocunduva', 'Antonio Inglesi', 'Diego Garcia', 'Otto Lautert', 'Pedro Caputo', 'Tiago Rodrigues', 'jogador7']
    let divs = [document.getElementById("a"), document.getElementById("b"), document.getElementById("c"), document.getElementById("d"), document.getElementById("e"), document.getElementById("f"), document.getElementById("g")]
    esc = jog[n]
    y = divs[n]
    prec = preço[n]
    time.push(esc)
    pre.push(Number(prec))
    y.innerText = `${esc} comprado`
    let item = document.createElement('option')
    item.text = `${esc} ${prec}V$`
    lista.appendChild(item)
   
    let timeprov = 0
        for (let pos in pre) {
            timeprov += pre[pos]
        }
    
    let item2 = document.createElement('option')
    item2.text = `${timeprov}V$`
    res2.innerHTML = `O preço do seu time é: ${item2.text}`
     
     
}


    
function vender(n){

}

function fechar() {
    if (time.length != 5){
        alert('Seu time deve ter 5 jogadores!! Reinicie seu time!')
        
    } else{
        let preçoTime = 0
        for (let pos in pre) {
            preçoTime += pre[pos]
        }
        
        if (preçoTime > 30) {
            alert('seu time está muito caro, o preço máximo é 30V$')
        } else {
            res.innerHTML = ` Time fechado! Você escolheu ${time} e Seu time custa ${preçoTime}V$ `
            
        }
    }
       
}



