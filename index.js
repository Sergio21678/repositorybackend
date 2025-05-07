require('dotenv').config()
const http = require('http')

function requestHandler() {
    console.log('Bienvenidos al curso')
}

const server=http.createServer(requestController)

const PORT = process.env.PORT

serverhttp.listen(PORT, function () {
    console.log("Aplicacion corriendo en: " + PORT)})