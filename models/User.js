const Sequelize = require('sequelize');
const database = require('./database');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.STRING(255),
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    cpf: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
}, {
    timestamps: false
})