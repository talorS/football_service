const csv = require("csvtojson/v1");

/*convert csv file to json using csvtojson module 
*param csvFilePath - csv file path location 
* return json objects array
*/
exports.readDataFromCSVFile = function (csvFilePath) {
    return new Promise((resolve, reject) => {
        csv().fromFile(csvFilePath, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    })
}

