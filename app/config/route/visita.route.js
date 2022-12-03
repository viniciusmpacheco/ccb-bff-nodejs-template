const VisitaController = require('../../controller/visita.controller')

module.exports = app => {
    app.get('/visitas', (request, response) => { VisitaController.list(request, response) })
    app.get('/visita/:id', (request, response) => { VisitaController.read(request, response)})
    app.post('/visita', (request, response) => { VisitaController.create(request, response)})
    app.patch('/visita', (request, response) => { VisitaController.update(request, response)})
    app.delete('/visita/:id', (request, response) => { VisitaController.delete(request, response)})
}