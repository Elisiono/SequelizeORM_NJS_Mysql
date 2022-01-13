const { Router } = require('express')
const MatriculasController = require('../controllers/MatriculaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matricula', MatriculasController.pegaMatricula)
    .get('/pessoas/matricula/:turmaId/confirmadas', MatriculasController.pegaMatriculaPorTurma)
    .get('/pessoas/matricula/lotada', MatriculasController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:estudanteId/matricula', MatriculasController.criaMatricula)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculasController.restauraMatricula)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.atualizaMatricula)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.apagaMatricula)
    .delete('/pessoas/:id', PessoaController.apagaPessoa)

module.exports = router