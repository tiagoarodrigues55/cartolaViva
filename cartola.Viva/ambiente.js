let antonio_t = {nome:'Antônio Tocunduva', preço: preço(), valorização: valorização(), pontuaçãoTotal: tot(), media: media(), pontuação:0, time: 'ottomanos', rodada:1}
function preço(){
    var preço = 5
     preço=this.preço + valorização
    return preço
}
function valorização(){
    var valorização = 5
     valorização = this.valorização*pontuação
    return valorização
}
function media(){
    var media = tot/rodada
    return media 

}
function tot(){
    var tot=0
    tot = this.tot + pontuação
    return tot
}





var tiago = 0
var jogador = antonio_t
var rodada =Number(1) 
var pontuação =Number(7)
antonio_t.rodada = rodada
antonio_t.pontuação = pontuação


console.log(antonio_t)