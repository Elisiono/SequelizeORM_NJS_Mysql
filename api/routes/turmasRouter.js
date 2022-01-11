const { Router } = require('express')
const TurmaController = require ('../controllers/TurmaController')

const router = Router()
router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turma/:id', TurmaController.pegaUmaTurma)
    .post('/turma', TurmaController.criaTurma)
    .post('/turmas/:id/restaura', TurmaController.restauraTurma)
    .put('/turma/:id', TurmaController.atualizaTurma)
    .delete('/turmas/:id', TurmaController.apagaTurma)

module.exports = router

