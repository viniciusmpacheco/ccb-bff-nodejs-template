const app = require('./config/server/config.js')
const porta = 30001

app.get('/', (request, response) => {
    response.send('Hello World!')
})  

app.listen(porta, () => {
    console.log('BFF em Funcionamento')
})