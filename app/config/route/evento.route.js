const EventoController = require('../../controller/evento.controller')

module.exports = app => {
    app.get('/eventos', (request, response) => { EventoController.list(request, response) })
    app.get('/evento/:id', (request, response) => { EventoController.read(request, response)})
    app.post('/evento', (request, response) => { EventoController.create(request, response)})
    app.patch('/evento', (request, response) => { EventoController.update(request, response)})
    app.delete('/evento/:id', (request, response) => { EventoController.delete(request, response)})
}