const PontoFocalController = require('../../controller/pontoFocal.controller')

module.exports = app => {
    app.get('/pontosFocais', (request, response) => { PontoFocalController.list(request, response) })
    app.get('/pontoFocal/:id', (request, response) => { PontoFocalController.read(request, response)})
    app.post('/pontoFocal', (request, response) => { PontoFocalController.create(request, response)})
    app.patch('/pontoFocal', (request, response) => { PontoFocalController.update(request, response)})
    app.delete('/pontoFocal/:id', (request, response) => { PontoFocalController.delete(request, response)})
}