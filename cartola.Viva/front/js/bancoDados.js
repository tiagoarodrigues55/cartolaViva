import Lib from './lib.mjs'

console.log(Lib.soma(2, 3))



axios.get('http://localhost:3000/jogadores')
.then(response => função(response.data))
.catch(error => console.log(error))

const função = ( Apoio ) => {
    console.log(Apoio)
    var fotoOttomanos = []
var nomesOttomanos = []
var preçosOttomanos = []
var idOttomanos =  []
    for (let i of Apoio){
        if (i.id <= 6){
            fotoOttomanos.push(i.img)
            nomesOttomanos.push(i.name)
            preçosOttomanos.push(i.preço)
            idOttomanos.push(i)
        }
    }
var Ottomanos = {
    nomesReais: nomesOttomanos,
    nomes: idOttomanos.sort(function(a,b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
        }),
    img: fotoOttomanos,
    jogadores: nomesOttomanos,
    preço: preçosOttomanos
}
var times = [Ottomanos]
var confrontos = []
axios.get('http://localhost:3000/confronto')
.then(response => {
    confrontos = response.data
    localStorage.setItem('list_confrontos', JSON.stringify(confrontos))
    console.log(confrontos)
})
.catch(error => console.log(error))


console.log(Ottomanos)
localStorage.setItem('object_Ottomanos', JSON.stringify(Ottomanos))
localStorage.setItem('list_times', JSON.stringify(times))
}




//var Bl31 = JSON.parse(localStorage.getItem('propaganda_Bl31')) || []
//const propagandas = [{fotoEmpresa: 'bl3.webp', nome: 'Bl31', foto1: 'bl3.webp', foto2: 'bl32.webp', width1: 400, height1: 400, width2: 500, height2: 400, txt1: 'Aulas de windsurf', txt2: 'Aulas de kitesurf', dados: Bl31, porcentagem: porcentagem.Bl31}]

var porcentagem = JSON.parse(localStorage.getItem('propaganda_porcentagens')) || {}

