const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

require('./database')

app.use(express.json())

app.use(cors())
app.use(routes)
app.listen(3000)