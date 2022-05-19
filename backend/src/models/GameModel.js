
const bcrypt = require('bcrypt')
const { DataTypes } = require('sequelize')

module.exports=(sequelize) => {
    const model = sequelize.define('Game', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        company: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30), 
            allowNull: false
        }
    },
    {
        underscored: true, 
        timestamps: false
    })
    return model
}