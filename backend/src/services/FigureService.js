
const BaseService = require('./BaseService')

class FiguresService extends BaseService {
  listFigures ()  {
    const figureModel = this.getModel('Figure')
    return figureModel.findAll({})
  }
  createFigure(figure){
    const figureModel = this.getModel('Figure')
    return figureModel.create(figure)
  }
  updateFigure(figureId, details){
    const figureModel = this.getModel('Figure')
    return figureModel.update(
      details,
      {
         where:{ 
           id: figureId 
         }
      }
    ) 
  }
  destroyFigure (figureId) {
    const figureModel = this.getModel('Figure')
    return figureModel.destroy(
      {
        where: {id: figureId}
      }
    )
  }
}

module.exports = FiguresService