const express = require('express')
const consign = require('consign')

app = express()
app.use(express.json());

consign()
    .include('./app/config/route')
    .into(app)

module.exports = app


