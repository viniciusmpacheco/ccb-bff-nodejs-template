const RecitativoController = require('../../controller/recitativo.controller')

module.exports = app => {
    app.get('/recitativos', (request, response) => { RecitativoController.list(request, response) })
    app.get('/recitativo/:id', (request, response) => { RecitativoController.read(request, response)})
    app.post('/recitativo', (request, response) => { RecitativoController.create(request, response)})
    app.patch('/recitativo', (request, response) => { RecitativoController.update(request, response)})
    app.delete('/recitativo/:id', (request, response) => { RecitativoController.delete(request, response)})
}