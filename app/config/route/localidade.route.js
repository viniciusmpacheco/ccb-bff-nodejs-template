const LocalidadeController = require('../../controller/localidade.controller')

module.exports = app => {
    app.get('/localidades', (request, response) => { LocalidadeController.list(request, response) })
    app.get('/localidade/:id', (request, response) => { LocalidadeController.read(request, response)})
    app.post('/localidade', (request, response) => { LocalidadeController.create(request, response)})
    app.patch('/localidade', (request, response) => { LocalidadeController.update(request, response)})
    app.delete('/localidade/:id', (request, response) => { LocalidadeController.delete(request, response)})
}