

const express = require('express')
const { validation } = require('../utils/validation')
const controllerValidations = require('../validations/comics')
const router = express.Router()
const comicsController = require('../controllers/comicsController')

router.get(
  '/',
  comicsController.getComics
)

router.post(
  '/',
  validation(controllerValidations.createValidations),
  comicsController.createComic
)

router.put(
  '/:id',
  validation(controllerValidations.updateValidations),
  comicsController.updateComic
)

router.delete(
  '/:id',
  comicsController.destroyComic
)

module.exports = router
