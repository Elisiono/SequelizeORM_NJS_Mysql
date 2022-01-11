'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkInsert('Pessoas', [
    {
      nome: 'John Doe',
      ativo: true,
      email: 'felipe@felipe.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Sandra Gomes',
      ativo: false,
      email: 'sandra@sandra.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Ana Souza',
      ativo: true,
      email: 'ana@ana.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Marcos Cintra',
      ativo: true,
      email: 'marcos@marcos.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Paula morais',
      ativo: true,
      email: 'paula@paula.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Sergio Lopes',
      ativo: true,
      email: 'sergio@sergio.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
