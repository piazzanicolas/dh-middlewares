const path = require('path');
const fs = require('fs');

let filePath = path.join(__dirname, `../logs/userLogs.txt`);

function userLogs (req,res,next) {
    let saveLog =  "El usuario ingresó a la ruta: " + req.url + '\n'
    let dataLog= fs.readFileSync(filePath, 'utf-8');
    if (dataLog == ''){
        fs.writeFileSync(filePath, saveLog);  
    } else {
        fs.appendFileSync(filePath, saveLog);
    }
    next();
}

module.exports = userLogs;