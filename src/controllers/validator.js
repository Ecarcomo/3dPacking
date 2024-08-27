const { body } = require('express-validator')


/**
 * @function validate
 * @author @emmanuel_carcomo <emmanuelcarcomo@gmail.com> 
 * @description function for validate request information sended to API endpoints 
 * @param {String} method endpoint function name
 */
const validate = (method) => {
  switch (method) {
    case 'packController': {
     return [ 
      body('baulera','error de dato - baulera').exists().notEmpty(),
      body('baulera.name','error de dato - baulera.name').exists().notEmpty().isString(),
      body('baulera.width','error de dato - baulera.width').exists().notEmpty().isFloat(),
      body('baulera.height','error de dato - baulera.height').exists().notEmpty().isFloat(),
      body('baulera.depth','error de dato - baulera.depth').exists().notEmpty().isFloat(),
      body('baulera.weightLimit','error de dato - baulera.weightLimit').exists().notEmpty().isInt(),
      body('items','error de dato - items').exists().notEmpty(),
      body('items.*.name','error de dato - items.name').exists().notEmpty().isString(),
      body('items.*.width','error de dato - items.width').exists().notEmpty().isFloat(),
      body('items.*.height','error de dato - items.height').exists().notEmpty().isFloat(),
      body('items.*.depth','error de dato - items.depth').exists().notEmpty().isFloat(),
      body('items.*.weight','error de dato - items.weight').exists().notEmpty().isFloat(),
      body('items.*.quantity','error de dato - items.quantity').exists().notEmpty().isFloat()
    ]   
    }
  }
}

module.exports =  validate;