 
  import { criarElemento } from './js/lib.mjs'

  console.log()
       /*
        var jogadores = []
        var rodada = 1  //MUDAR ISSO!!!!!!
        var usu = []
        axios.get('http://localhost:3000/users').then(response => {
        usu = response.data
        axios.get(`http://localhost:3000/users/${rodada}/escalacaoR`).then(response => {
        var escalados = response.data
        axios.get('http://localhost:3000/jogadores').then(response => {
        jogadores = response.data
        Lib.tabelaRodada(jogadores, escalados, usu)
        })
        })
        })*/
        
        criarElemento('button', '', 'eai', "criarElemento('p', '', 'eai', '', 'div' )", 'div')
       
  
    
        var timesEscalados = [jogadores]
        var trs = []
        var tds = []
        var soma = []
        function generateTableHead(table, data) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of data) {
                let th = document.createElement("th");
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            }
        }
        function generateTable(table, data) {
            for (let element of data) {
                let row = table.insertRow();
                for ( let key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }
        function tabelas(tabela){
        let table = document.querySelector("table");
        let data = Object.keys(tabela[0]);
        generateTableHead(table, data);
        generateTable(table, tabela);
        var caption = document.querySelector('caption')
        }
    