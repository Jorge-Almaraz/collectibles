
const ServiceFactory = require('../services/Factory')

async function getGames (req, res) {
    try {
        const gamesService = await ServiceFactory.getService('games')
        const games = await gamesService.listGames()
        res.json(games)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.toString())
    }
}

async function createGame(req, res) {
    try {
        const gamesService = await ServiceFactory.getService('games')
        const game = await gamesService.createGame(req.body)
        res.json(game)        
    } catch (err) {
        console.error(err)
        res.status(500).send(err.toString())
    }
}

async function updateGame(req, res) {
    try {
        const { id } = req.params
        const gamesService = await ServiceFactory.getService('games')
        const game = await gamesService.updateGame(id, req.body)
        res.json (game)
    }catch(err) {
        console.error(err)
        res.status(500).send(err.toString())        
    }
}

async function destroyGame (req,  res) {
    try{
        const { id } = req.params
        const gamesService = await ServiceFactory.getService('games')
        const game = await gamesService.destroyGame(id)
        res.json(game)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.toString())        
    }    
}

module.exports = {
    getGames,
    createGame,
    updateGame,
    destroyGame
}
