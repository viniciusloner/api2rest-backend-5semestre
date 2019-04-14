const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
const server = require('http').Server(app)
//const io = require('socket.io')(server)

/* io.on('connection', socket => {
    socket.on('connectRoom', box =>{
        socket.join(box)
    })
})
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
/* app.use((req, res, next) => {
    req.io = io
    return next()
}) */

app.get('/', (req, res) => {
    res.send('Hello World')
})

require('./app/controllers/index')(app)

server.listen(process.env.PORT || 8000)