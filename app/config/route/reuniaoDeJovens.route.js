const ReuniaoDeJovensController = require('../../controller/reuniaoDeJovens.controller')

module.exports = app => {
    app.get('/reunioesDeJovens', (request, response) => { ReuniaoDeJovensController.list(request, response) })
    app.get('/reuniaoDeJovens/:id', (request, response) => { ReuniaoDeJovensController.read(request, response)})
    app.post('/reuniaoDeJovens', (request, response) => { ReuniaoDeJovensController.create(request, response)})
    app.patch('/reuniaoDeJovens', (request, response) => { ReuniaoDeJovensController.update(request, response)})
    app.delete('/reuniaoDeJovens/:id', (request, response) => { ReuniaoDeJovensController.delete(request, response)})
}