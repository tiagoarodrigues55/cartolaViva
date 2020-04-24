var usuarios = JSON.parse(localStorage.getItem('list_usuarios')) || []
var emails = JSON.parse(localStorage.getItem('list_emails')) || []
var senhas = JSON.parse(localStorage.getItem('list_senhas')) || []


criarElemento('h1', '', 'Login', '', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('img', '', 'logo2.png', 'width: 200px; float: right; position: relative; bottom: 20px;', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('input', 'email', 'email', 'email', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('input', 'senha', 'senha', 'password', 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('button', 'button', 'Entrar', "login()", 'form')
criarElemento('br', '', '', '', 'form')
criarElemento('a', 'link', 'cadastre-se aqui', 'cadastrar.html', 'form')

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

  var vivacoins

function login(){
        var email = document.querySelector('input#email').value 
        var emails = JSON.parse(localStorage.getItem('list_emails')) || []
        var senha = document.querySelector('input#senha').value 
        var senhas = JSON.parse(localStorage.getItem('list_senhas')) || []
        if (emails.indexOf(email)!= -1){
            let i = emails.indexOf(email)
            if (senha == senhas[i]){
                entrar(i)
                function entrar(i){
                    vivacoins = usuarios[i].vivacoins
                    //usuarios[i].ultimoAcesso = horario
                    console.log(vivacoins)
                    document.getElementById('email').remove()
                    document.getElementById('senha').remove()
                    document.getElementById('button').remove()
                    document.getElementById('link').remove()
                    criarElemento('h2','', `Bem vindo ${usuarios[0].nome}`, '', 'form')

                }
                
                
            }else{
                alert('senha incorreta')
            }
        }else{
            alert('Esse email não está cadastrado')
        }
    }
