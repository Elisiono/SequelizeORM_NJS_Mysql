const database = require ('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros() {
        return database [this.nomeDoModelo].findAll({ where: { ...where } })
    }

    async pegaUmRegistro() {
        return database [this.nomeDoModelo].findOne({ where: { ...where } })
    }

    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { id:id }}, transacao)
    }

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { ...where }}, transacao)
    }

    async apagaRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where: {id:id } })
    }

    async restauraRegistro(id){
        return database[this.nomeDoModelo].restore({ where: {id:id} })
    }

    async consultaRegistrosApagados(id){
        return database[this.nomeDoModelo]
        .findOne({  paranoid: false, where: {id:Number(id) } })
    }

    async encontraEcontaRegistros(where = {}, agregadores) {
        return database[this.nomeDoModelo]
        .findAndCountAll({ where: { ...where}, ...agregadores})
    }
}

module.exports = Services