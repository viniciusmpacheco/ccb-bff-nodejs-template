const NecessidadeController = require('../../controller/necessidade.controller')

module.exports = app => {
    app.get('/necessidades', (request, response) => { NecessidadeController.list(request, response) })
    app.get('/necessidade/:id', (request, response) => { NecessidadeController.read(request, response)})
    app.post('/necessidade', (request, response) => { NecessidadeController.create(request, response)})
    app.patch('/necessidade', (request, response) => { NecessidadeController.update(request, response)})
    app.delete('/necessidade/:id', (request, response) => { NecessidadeController.delete(request, response)})
}