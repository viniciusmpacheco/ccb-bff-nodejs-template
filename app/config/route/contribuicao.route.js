const ContribuicaoController = require('../../controller/contribuicao.controller')

module.exports = app => {
    app.get('/contribuicoes', (request, response) => { ContribuicaoController.list(request, response) })
    app.get('/contribuicao/:id', (request, response) => { ContribuicaoController.read(request, response)})
    app.post('/contribuicao', (request, response) => { ContribuicaoController.create(request, response)})
    app.patch('/contribuicao', (request, response) => { ContribuicaoController.update(request, response)})
    app.delete('/contribuicao/:id', (request, response) => { ContribuicaoController.delete(request, response)})
}