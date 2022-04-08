
const bcrypt = require('bcrypt')
const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
    const model  = Sequelize.define('Figure', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING(30), 
            allowNull: false            
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    },
    {
        underscored: true
    })
    return model
}