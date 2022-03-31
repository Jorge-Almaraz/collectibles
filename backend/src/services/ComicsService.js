
const BaseService = require('./BaseService')

class ComicsService extends BaseService {
  getComic (id) {
    const comicsModel = this.getModel('Comic')
    return comicsModel.findOne({
      where: {
        id
      }
    })
  }
  listComics () {
    const comicsModel = this.getModel('Comic')
    return comicsModel.findAll({})
  }
  createComic (comic) {
    const comicsModel = this.getModel('Comic')
    return comicsModel.create(comic)
  }
  updateComic (comicId, details) {
    const comicModel = this.getModel('Comic')
    return comicModel.update(details, { where: { id: comicId }})
  }
  destroyComic (comicId) {
    const comicModel = this.getModel('Comic')
    return comicModel.destroy({ where: { id: comicId }})
  }
}

module.exports = ComicsService
