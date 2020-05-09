
function criarElemento(elemento, id, txt, função, endereçoId){
  if (elemento === 'button'){
    let endereço = document.getElementById(endereçoId)
    let nome = document.createElement(elemento)
    nome.appendChild(document.createTextNode(txt))
    nome.setAttribute('id', id)
    nome.setAttribute('onclick', função)
    endereço.appendChild(nome)
  }else{
    if (elemento === 'input'){
      let endereço = document.getElementById(endereçoId)
      let nome = document.createElement(elemento)
      nome.setAttribute('placeholder', txt)
      nome.setAttribute('id', id)
      nome.setAttribute('type', função)
      endereço.appendChild(nome)
    }else{
      if (elemento === 'a'){
        let endereço = document.getElementById(endereçoId)
        let nome = document.createElement(elemento)
        nome.setAttribute('href', função)
        nome.setAttribute('id', id)
        nome.appendChild(document.createTextNode(txt))
        endereço.appendChild(nome)
      }else{
        if(elemento === 'img'){
          let endereço = document.getElementById(endereçoId)
          let nome = document.createElement(elemento)
          nome.setAttribute('src', txt)
          nome.setAttribute('style', função)
          nome.setAttribute('id', id)
          nome.appendChild(document.createTextNode(txt))
          endereço.appendChild(nome)
        }else{
          let endereço = document.getElementById(endereçoId)
          let nome = document.createElement(elemento)
          nome.appendChild(document.createTextNode(txt))
          nome.setAttribute('id', id)
          endereço.appendChild(nome)
        }
      }
    }
  }
}