const express = require('express')
const app = express()
const cors = require('cors')
const adminRouter = express.Router()
const userRouter = express.Router()
const path = require('path')
var mongoose = require('mongoose');

mongoose.connect('mongodb2://localhost/db_cartola');
//site para mais infos: http://stack.desenvolvedor.expert/criando-api-restful/configurando-servico-http.html
var antonio_t = {nome: 'Antonio Tocunduva', custo: 8, foto: 'antonio_t.png', time: 'Ottomanos', media: 0, ultimaPontuação: 0, pontuação: [], valorização: 0}
var antonio_i = {nome: 'Antonio Inglesi (basca)', custo: 5, foto: 'antonio_i.png', time: 'Ottomanos', media: 0, ultimaPontuação: 0, pontuação: [], valorização: 0}
var diego_g = {nome: 'Diego Garcia (dieguinho)', custo: 9, foto: 'none', time: 'Ottomanos', media: 0, ultimaPontuação: 0, pontuação: [], valorização: 0}
var otto_l = {nome: 'Otto Lautert (Ottera)', custo: 4, foto: 'otto_l.png', time: 'Ottomanos', media: 0, ultimaPontuação: 0, pontuação: [], valorização: 0}
var pedro_c = {nome: 'Pedro Caputo (Pedrão)', custo: 3, foto: 'pedro_c.png', time: 'Ottomanos', media: 0, ultimaPontuação: 0, pontuação: [], valorização: 0}
var tiago_r = {nome: 'Tiago Rodrigues (Americano)', custo: 8, foto: 'tiago_r.jpg', time: 'Ottomanos', media: 0, ultimaPontuação: 0, pontuação: [], valorização: 0}
var jogador7 = {nome: 'Bento Rodrigues', custo: 15, foto: 'bl3.webp', time: 'outro', media: 0, ultimaPontuação: 0, pontuação: [], valorização: 0}



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
// 2. criar rotas para ele
// página principal (http://localhost:8000/admin)
adminRouter.get('/', (req, res) => {
  res.send('Eu sou o dashboard!')
})

// página de usuários (http://localhost:8000/admin/users)
adminRouter.get('/users', (req, res) => {
  res.send('Aqui listamos todos os usuários!')
})

// página de posts (http://localhost:8000/admin/posts)
adminRouter.get('/posts', (req, res) => {
  res.send('Aqui veremos todos os posts!')
})
userRouter.get('/times', function (req, res){
  res.send(Ottomanos)
})
userRouter.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
})
// middleware de validação para 'name'
adminRouter.param('name', (req, res, next, name) => {
  // faça a validação do 'name' aqui
  // validação blah blah
  // logar alguma coisa pra sabermos se funciona
  console.log('validando o nome: ' + name)

  // quando a validação acabar, salve o novo nome na requisição
  req.name = name
  // vá para a próxima coisa a fazer
  next()
})
// rota com parâmetros (http://localhost:8000/admin/users/:name)
adminRouter.get('/users/:name', (req, res) => {
  res.send('Faalaaa ' + req.params.name + '!')
})
// 3. adicionar essas rotas a aplicação principal
app.use('/admin', adminRouter)
app.use('/user', userRouter)
//const Product = {}
app.use(cors())



app.listen(3001)
