
const { Sequelize } = require('sequelize')

module.exports = {
  up: ({ context: queryInterface }) => {
    return queryInterface.createTable('comics', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      brand: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('comics')
  }
}
