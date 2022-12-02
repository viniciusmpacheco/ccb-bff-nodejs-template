const SampleController = require('../../controller/sampleController')

module.exports = app => {
    app.get('/samples', (request, response) => { SampleController.list(request, response) })
    app.get('/sample/:id', (request, response) => { SampleController.read(request, response)})
    app.post('/sample', (request, response) => { SampleController.create(request, response)})
    app.patch('/sample', (request, response) => { SampleController.update(request, response)})
    app.delete('/sample/:id', (request, response) => { SampleController.delete(request, response)})
}