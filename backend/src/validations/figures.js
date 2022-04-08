    
const Joi= require('joi')

const createValidations =Joi.object({
    brand: Joi.string()
        .min(1)
        .max(30)
        .required(),
    name: Joi.string()
        .min(1)
        .max(30)
        .required()    
})

const updateValidations = Joi.object({
    brand: Joi.string()
    .min(1)
    .max(30)
    .required(),
    name: Joi.string()
    .min(1)
    .max(30)
    .required()
})

module.exports ={
createValidations,
updateValidations
}