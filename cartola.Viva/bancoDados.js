var antonio_t = {nome: 'Antonio Tocunduva', custo: 7, foto: 'antonio_t.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: [], valorização: 'função'}
var antonio_i = {nome: 'Antonio Inglesi (basca)', custo: 5, foto: 'antonio_i.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: [], valorização: 'função'}
var diego_g = {nome: 'Diego Garcia (dieguinho)', custo: 9, foto: 'none', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: [], valorização: 'função'}
var otto_l = {nome: 'Otto Lautert (Ottera)', custo: 4, foto: 'otto_l.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: [], valorização: 'função'}
var pedro_c = {nome: 'Pedro Caputo (Pedrão)', custo: 3, foto: 'pedro_c.png', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: [], valorização: 'função'}
var tiago_r = {nome: 'Tiago Rodrigues (Americano)', custo: 8, foto: 'tiago_r.jpg', time: 'Ottomanos', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: [], valorização: 'função'}
var jogador7 = {nome: 'Bento Rodrigues', custo: 15, foto: 'bl3.webp', time: 'outro', media: 'função', ultimaPontuação: 'ultimo jogo', pontuação: [], valorização: 'função'}



var fotoOttomanos = [antonio_t.foto, antonio_i.foto, diego_g.foto, otto_l.foto, pedro_c.foto, tiago_r.foto, jogador7.foto]
var nomesOttomanos = [antonio_t.nome, antonio_i.nome, diego_g.nome, otto_l.nome, pedro_c.nome, tiago_r.nome, jogador7.nome]
var preçosOttomanos = [antonio_t.custo, antonio_i.custo, diego_g.custo, otto_l.custo, pedro_c.custo, tiago_r.custo, jogador7.custo]
var idOttomanos =  [antonio_t, antonio_i, diego_g, otto_l, pedro_c, tiago_r, jogador7]

const Ottomanos = {
    nomes: idOttomanos,
    img: fotoOttomanos,
    jogadores: nomesOttomanos,
    preço: preçosOttomanos
}
//var Bl31 = JSON.parse(localStorage.getItem('propaganda_Bl31')) || []
//const propagandas = [{fotoEmpresa: 'bl3.webp', nome: 'Bl31', foto1: 'bl3.webp', foto2: 'bl32.webp', width1: 400, height1: 400, width2: 500, height2: 400, txt1: 'Aulas de windsurf', txt2: 'Aulas de kitesurf', dados: Bl31, porcentagem: porcentagem.Bl31}]

var porcentagem = JSON.parse(localStorage.getItem('propaganda_porcentagens')) || {}
const Time2 = {
    img: ['foto1','foto2','foto3'],
    jogadores: ['jogador1', 'jogador2', 'jogador3'],
    preço: [1, 2, 3]

}
saveToStorage()
function saveToStorage() {
    
    localStorage.setItem('object_Ottomanos', JSON.stringify(Ottomanos))
   // localStorage.setItem('list_propagandas', JSON.stringify(propagandas))
   
}