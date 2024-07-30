//Dependences imports
const { validationResult } = require('express-validator');

//Local imports
const pythonExecutor = require('../utils/pythonExecutor');


/**
 * @function packController
 * @author @emmanuel_carcomo <emmanuelcarcomo@gmail.com> 
 * @description packController verify if request info is correct and call to pythonExecutor function
 * @param {Object} req info object sended to API request with JSON 
 * @param {Object} res API response empty
 * @returns  {Object}  API response
 */
const packController = (req, res) => {

    const errors = validationResult(req); 

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    //console.log(JSON.stringify(req.body))
    pythonExecutor.executePythonScript('./src/utils/ejecutable.py', JSON.stringify(req.body))
    .then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.setHeader('Content-Type', 'text/html');
        res.status(500).send(`Failed to execute Python script - ${err}`);
    });

};


module.exports =  packController;