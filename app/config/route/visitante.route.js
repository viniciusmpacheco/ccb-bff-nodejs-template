const VisitanteController = require('../../controller/visitante.controller')

module.exports = app => {
    app.get('/visitantes', (request, response) => { VisitaController.list(request, response) })
    app.get('/visitante/:id', (request, response) => { VisitanteController.read(request, response)})
    app.post('/visitante', (request, response) => { VisitanteController.create(request, response)})
    app.patch('/visitante', (request, response) => { VisitanteController.update(request, response)})
    app.delete('/visitante/:id', (request, response) => { VisitanteController.delete(request, response)})
}