const { exec } = require('child_process');

/**
 * @function executePythonScript
 * @author @emmanuel_carcomo <emmanuelcarcomo@gmail.com> 
 * @description executePythonScript parse JSON in {data} param and make correct format to send to python executable
 * @param {Object} scriptPath path to python executable 
 * @param {Object} data JSON data for python executable 
 * @returns  {Object}  Python response
 */
function executePythonScript(scriptPath, data) {


    var params ="--";
    const pJSON = JSON.parse(data);
    params =  "\"baulera::"+
              pJSON.baulera.name  +"|"+
              pJSON.baulera.width  +"|"+
              pJSON.baulera.height  +"|"+
              pJSON.baulera.depth  +"|"+
              pJSON.baulera.weightLimit  +"\" ";
              
    pJSON.items.forEach((item)=>{
      params += "\"item::"+
                item.name +"|"+
                item.width +"|"+
                item.height +"|"+
                item.depth +"|"+
                item.weight +"\" ";
    });

    command = "py "+scriptPath+" "+params;
    return new Promise((resolve,reject) => {
      exec(command , (err, stdout, stderr) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          //console.log(stdout);
          resolve (stdout);
      });
    });
    
   
}

module.exports = {
  executePythonScript,
};
