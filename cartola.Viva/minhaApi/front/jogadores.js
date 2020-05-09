var Ottomanos = JSON.parse(localStorage.getItem('object_Ottomanos')) || {}

var total = []
var media = []
var con = 0
for (i of Ottomanos.nomes){
    var tot = 0
    var med = 0
    for(let p of i.pontuação){
        tot += p
        med = tot/i.pontuação.length
        total.push(tot)
        media.push(med)
    }
    
    i.media = media[con]
    i.total = total[con]
    con++
    console.log(Ottomanos.nomes)
}