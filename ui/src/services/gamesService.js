
import Requests from "../utils/requests"
const axios = Requests.getAxios()

export default class GamesService {
    static getGames (){
        return axios.get('/api/games')        
    }
    static updateGame (gameId, game) {
        return axios.put('/api/games/${gameId}', )
    }
    static createGame (game) {
        return axios.post('/api/games', game)
    }
    static deleteGame (gameId) {
        return axios.delete('/api/games/${gameId}')
    }
}