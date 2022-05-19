
const ServiceFactory = require ('../services/Factory')

async function getFigures (req, res) {
    try {
        const figuresService = await ServiceFactory.getService('figures')
        const figures = await figuresService.listFigures()
        res.json(figures)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.toString())
    }
}

async function createFigure (req, res) {
    try {
        const figuresService = await ServiceFactory.getService('figures')
        const figure = await figuresService.createFigure(req.body)
        res.json(figure)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.toString())
    }
}

    async function updateFigure (req, res) {
        try {
        const {id} =req.params
        const figuresService = await ServiceFactory.getService('figures')
        const figure = await figuresService.updateFigure (id, req.body)
        res.json(figure)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.toString())
    }
}

    async function destroyFigure (req, res) {
        try {
        const {id} = req.params
        const figuresService = await ServiceFactory.getService('figures')            
        const figure = await figuresService.destroyFigure(id)
        res.json(figure)            
    } catch (err) {
        console.error(err)
        res.status(500).send(err.toString())
    }
}

    module.exports = {
        getFigures,
        createFigure,
        updateFigure,
        destroyFigure
    }