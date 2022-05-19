
const bcrypt = require('bcrypt')
const { DataTypes } = require('sequelize')

module.exports=(sequelize) =>{
    const model = sequelize.define('Figure', {
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
        series: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    },
    {
    underscored: true
    })
    return model
}