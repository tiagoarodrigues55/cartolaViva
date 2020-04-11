
var time = []
let pre = []
function comprar(n) {
    let preço = [10, 5, 7, 8, 3]
    let jog = ['jogador1', 'jogador2', 'jogador3', 'jogador4', 'jogador5']
    
    esc = jog[n]
    prec = preço[n]
    time.push(esc)
    pre.push(prec)
}
function fechar() {
    if (time.length == 5){
        //res.innerHTML = 'Time fechado!'
        let p1 = Number(pre[0])
        let p2 = Number(pre[1])
        let p3 = Number(pre[2])
        let p4 = Number(pre[3])
        let p5 = Number(pre[5])
        let preçoTime = p1 + p2 + p3 + p4 + p5
        //res.innerHTML = ` seu time custa ${preçoTime}V$`
        if (preçoTime > 40) {
            return('seu time está muito caro, o preço máximo é 40V$')
        } else {
            return( ` seu time custa ${preçoTime}V$`)
        }
    } else {
        return('Seu time deve ter 5 jogadores!!')
    }

}
comprar(0)
comprar(1)
comprar(2)
comprar(3)
comprar(4)
fechar()
