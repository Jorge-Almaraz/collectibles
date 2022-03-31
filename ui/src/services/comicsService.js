

import Requests from "../utils/requests"
const axios = Requests.getAxios()


export default class ComicsService {
  static getComics () {
    return axios.get('/api/comics')
  }
  static updateComic (comicId, comic) {
    return axios.put(`/api/comics/${comicId}`, comic)
  }
  static createComic (comic) {
        return axios.post(`/api/comics`, comic)
  }
  static deleteComic (comicId) {
    return axios.delete(`/api/comics/${comicId}`)
  }
}
