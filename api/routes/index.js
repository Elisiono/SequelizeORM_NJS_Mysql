const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRouter')
const turmas = require('./turmasRouter')

module.exports = app => {
    app.use(bodyParser.json(),
    pessoas,
    niveis,
    turmas
    )
}