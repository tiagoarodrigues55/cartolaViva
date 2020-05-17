
axios.get('http://localhost:3000/jogadores')
.then(response => função(response.data))
.catch(error => console.log(error))

const função = ( Apoio ) => {
    console.log(Apoio)
   var antonio_t = Apoio[0]
    var antonio_i = Apoio[1]
    var diego_g = Apoio[2]
    var otto_l = Apoio[3]
    var pedro_c = Apoio[4]
    var tiago_r = Apoio[5]
var fotoOttomanos = [antonio_t.img, antonio_i.img, diego_g.img, otto_l.img, pedro_c.img, tiago_r.img]
var nomesOttomanos = [antonio_t.name, antonio_i.name, diego_g.name, otto_l.name, pedro_c.name, tiago_r.name]
var preçosOttomanos = [antonio_t.preço, antonio_i.preço, diego_g.preço, otto_l.preço, pedro_c.preço, tiago_r.preço]
var idOttomanos =  [antonio_t, antonio_i, diego_g, otto_l, pedro_c, tiago_r]
var Ottomanos = {
    nomesReais: nomesOttomanos,
    nomes: idOttomanos.sort(function(a,b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
        }),
    img: fotoOttomanos,
    jogadores: nomesOttomanos,
    preço: preçosOttomanos
}

console.log(Ottomanos)
localStorage.setItem('object_Ottomanos', JSON.stringify(Ottomanos))
}




//var Bl31 = JSON.parse(localStorage.getItem('propaganda_Bl31')) || []
//const propagandas = [{fotoEmpresa: 'bl3.webp', nome: 'Bl31', foto1: 'bl3.webp', foto2: 'bl32.webp', width1: 400, height1: 400, width2: 500, height2: 400, txt1: 'Aulas de windsurf', txt2: 'Aulas de kitesurf', dados: Bl31, porcentagem: porcentagem.Bl31}]

var porcentagem = JSON.parse(localStorage.getItem('propaganda_porcentagens')) || {}

