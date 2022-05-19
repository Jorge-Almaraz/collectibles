
import Requests from "../utils/requests";
const axios = Requests.getAxios()

export default class FiguresService {
    static getFigures () {
        return axios.get('/api/figures')
    }
    static updateFigure (figureId, figure) {
        return axios.put(`/api/figures/${figureId}`, figure)
    }
    static createFigure (figure) {
        return axios.post(`/api/figures`, figure)
    }
    static deleteFigure (figureId) {
        return axios.delete(`/api/figures/${figureId}`)
    }
}