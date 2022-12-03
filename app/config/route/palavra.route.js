const PalavraController = require('../../controller/palavra.controller')

module.exports = app => {
    app.get('/palavras', (request, response) => { PalavraController.list(request, response) })
    app.get('/palavra/:id', (request, response) => { PalavraController.read(request, response)})
    app.post('/palavra', (request, response) => { PalavraController.create(request, response)})
    app.patch('/palavra', (request, response) => { PalavraController.update(request, response)})
    app.delete('/palavra/:id', (request, response) => { PalavraController.delete(request, response)})
}