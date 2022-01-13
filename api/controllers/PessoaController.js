//const { sequelize } = require('../models')
//const database = require('../models')
//const Sequelize = sequelize

const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices()
//busca Pessoas
class PessoaController {
    static async pegaPessoasAtivas(req, res){
        try{
            const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
            return res.status(200).json(pessoasAtivas)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
            return res.status(200).json(todasAsPessoas)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

//Busca Uma Pessoa
    static async pegaUmaPessoa(req, res){
        const { id } = req.params
        try{
            const pessoa = await pessoasServices.pegaUmRegistro({ id })
            return res.status(200).json(pessoa)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
//Cria uma nova pessoa
    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }
//Atualiza um registro
    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try{
            await pessoasServices.atualizaRegistro(novasInfos, Number(id))
            return res.status(200).json({ mensagem: `id ${id} atualizado` })
        }catch (error){
            return res.status(500).json(error.menssage)
        }
    }
//deleta um registro
    static async apagaPessoa(req, res) {
        const { id } = req.params
        try{
            await pessoasServices.apagaRegistro(number(id))
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        }catch (error) {
            return res.status(500).json(error.menssage)
        }
    }
//restaura um registro
    static async restauraPessoa(req, res) {
        const { id } = req.params
        try{
            const registroRestaurado = await pessoasServices
                .restauraRegistro(Number(id))
            return res.status(200).json(registroRestaurado)
        }catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res){
        const { estudanteId } = req.params
        try {
            const matriculas = await pessoasServices
                .pegaMatriculaPorEstudante({ id: Number(estudanteId) })
            return res.status(200).json(matriculas)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async cancelaPessoa(req, res){
        const { estudanteId } = req.params
        try {
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
            return res.status(200)
                .json({message: `matriculas ref. ${estudanteId} canceladas`})
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = PessoaController