const JovemController = require('../../controller/jovem.controller')

module.exports = app => {
    app.get('/jovens', (request, response) => { JovemController.list(request, response) })
    app.get('/jovem/:id', (request, response) => { JovemController.read(request, response)})
    app.post('/jovem', (request, response) => { JovemController.create(request, response)})
    app.patch('/jovem', (request, response) => { JovemController.update(request, response)})
    app.delete('/jovem/:id', (request, response) => { JovemController.delete(request, response)})
}