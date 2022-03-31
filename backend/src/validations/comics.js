
const Joi = require('joi')

const createValidations = Joi.object({
  brand: Joi.string()
    .min(1)
    .max(30)
    .required(),
  title: Joi.string()
    .min(1)
    .max(30)
    .required()
})
// The main difference is that you can't update
// the account association or the date for a transaction
const updateValidations = Joi.object({
  brand: Joi.string()
  .min(1)
  .max(30)
  .required(),
  title: Joi.string()
    .min(1)
    .max(30)
    .required()
})

module.exports = {
  createValidations,
  updateValidations
}
