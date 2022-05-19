
const BaseService = require ('./BaseService')

class FiguresService extends BaseService {
    getFigure (id) {
        const figuresModel = this.getModel('Figure')
        return figuresModel.findOne({
            where: {
                id
            }
        })
    }
    listFigures () {
        const figuresModel = this.getModel('Figure')
        return figuresModel.findAll({})
    }
    createFigure (figure) {
        const figuresModel = this.getModel('Figure')
        return figuresModel.create(figure)
    }
    updateFigure (figureId, details) {
        const figureModel = this.getModel('Figure')
        return figureModel.update(details, { where: {id: figureId } })
    }
    destroyFigure (figureId) {
        const figureModel = this.getModel('Figure')
        return figureModel.destroy({where: {id: figureId}})
    }
}
module.exports= FiguresService