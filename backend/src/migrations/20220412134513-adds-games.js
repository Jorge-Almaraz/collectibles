
const { Sequelize } = require('sequelize')

module.exports = {
    up: ({ context: queryInterface }) => {
        return queryInterface.createTable('games', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                unique: true,
                allowNull: false,
                autoIncrement: true
            },
            company: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(30),
                allowNull: false
            }           
        })
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('games')
    }
}
