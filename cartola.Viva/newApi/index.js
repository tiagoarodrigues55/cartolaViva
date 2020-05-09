// IMPORTANDO OS PACKAGES --------------------
const express = require('express') // importando o express
const app = express() // definindo nosso app para usar o express
const bodyParser = require('body-parser') // importando body-parser
const morgan = require('morgan') // vamos usar para logar as requests
const mongoose = require('mongoose') // para trabalhar com nossa database
const port = process.env.PORT || 8000 // configurando a porta do serviço
const User = require('./domain/users')
//mongoose.connect('mongodb:192.168.99.100:27017/CRM', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://localhost/CRM', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
// CONFIGURANDO O SERVIÇO ---------------------
// usando o parser para pegar a informação do POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// configurando as chamadas CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
  next()
})

// logando as requisições no console
app.use(morgan('dev'))

// ROTAS PARA API
// =============================

// rota básica para home page
app.get('/', (req, res) => {
  res.send('Bem-vindo à home page!')
})

// pegando uma instância do express router
const apiRouter = express.Router()
// middleware usado por todas as requisições

apiRouter.use(function (req, res, next) {

    console.log('foi feita uma requisição para nossa API!')
 
    // vamos adicionar mais coisas aqui mais tarde
 
    // é aqui que vamos varificar a autenticação dos usuários
 
    next() // garantir que vamos para a próxima rota
 
  })
// roteamento de teste
// acesse GET http://localhost:8000/api
apiRouter.get('/', (req, res) => {
  res.json({ message: 'essa é nossa api!' })
})

// mais rotas devem ser configuradas aqui

// REGISTRANDO AS ROTAS -------------------------------
// as rotas serão prefixadas com /api
app.use('/api', apiRouter)

// INICIANDO O SERVIÇO
// ===============================


// rotas terminadas em /users
// ----------------------------------------------------
apiRouter.route('/users')
  // criar usuário (POST http://localhost:8000/api/users)
  .post(function (req, res) {
    // criar uma nova instância do Usuário
    var user = new User()
    // informações do usuário (na request)
    user.name = req.body.name
    user.username = req.body.username
    user.password = req.body.password
    // salvar e verificar erros
    user.save(function (err) {
      if (err) {
        // usuário duplicado
        if (err.code === 11000) {
          return res.json({
            success: false,
            message: 'Um usuário com esse username já existe.'
          })
        } else {
          return res.send(err)
        }
      }
      res.json({ message: 'Usuário criado!' })
    })
  })
app.listen(port)
console.log('A mágica acontece na porta ' + port)