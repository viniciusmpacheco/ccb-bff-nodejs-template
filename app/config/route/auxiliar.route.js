const AuxiliarController = require('../../controller/auxiliar.controller')

module.exports = app => {
    app.get('/auxiliares', (request, response) => { AuxiliarController.list(request, response) })
    app.get('/auxiliar/:id', (request, response) => { AuxiliarController.read(request, response)})
    app.post('/auxiliar', (request, response) => { AuxiliarController.create(request, response)})
    app.patch('/auxiliar', (request, response) => { AuxiliarController.update(request, response)})
    app.delete('/auxiliar/:id', (request, response) => { AuxiliarController.delete(request, response)})
}