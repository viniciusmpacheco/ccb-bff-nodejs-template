const ResponsavelController = require('../../controller/responsavel.controller')

module.exports = app => {
    app.get('/responsaveis', (request, response) => { ResponsavelController.list(request, response) })
    app.get('/responsavel/:id', (request, response) => { ResponsavelController.read(request, response)})
    app.post('/responsavel', (request, response) => { ResponsavelController.create(request, response)})
    app.patch('/responsavel', (request, response) => { ResponsavelController.update(request, response)})
    app.delete('/responsavel/:id', (request, response) => { ResponsavelController.delete(request, response)})
}