
const express = require ('express')
const {validation} = require('../utils/validation')
const controllerValidations = require('../validations/figures')
const router = express.Router()
const figuresController = require('../controllers/figuresController')

router.get(
    '/',
    figuresController.getFigures
)

router.post(
    '/',
    validation(controllerValidations.createValidations),
    figuresController.createFigure
)

router.put(
    '/:id',
    validation(controllerValidations.updateValidations),
    figuresController.updateFigure
)
router.delete(
    '/:id',
    figuresController.destroyFigure
)

module.exports = router