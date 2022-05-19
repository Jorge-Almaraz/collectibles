
const BaseService = require('./BaseService')

class GamesService extends BaseService {
    getGame(id) {
        const gameModel = this.getModel('Game')
        return gameModel.findOne({
            where: {
                id
            }
        })
    }
    listGames () {
        const gameModel = this.getModel('Game')
        return gameModel.findAll({})    
    }
    createGame (game) {
        const gameModel = this.getModel('Game')
        return gameModel.create(game)
    }
    updateGame (gameId, details) {
        const gameModel = this.getModel('Game')
        return gameModel.update(details, {where: {id: gameId}})
    }
    destroyGame (gameId) {
        const gameModel = this.getModel('Game')
        return gameModel.destroy({where: {id: gameId }})
    }
}

module.exports = GamesService
