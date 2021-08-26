const dalRead = require('../DAL/fileReader');
var path = require('path');
const result_played = path.join(__dirname, '..', 'csvData', 'result_played.csv');
const result_upcoming = path.join(__dirname, '..', 'csvData', 'result_upcoming.csv');

/*
returns the resolved data of the promise for result_played.csv
*/
exports.getDataResultPlayed = async function () {
    try {
        return await dalRead.readDataFromCSVFile(result_played);
    } catch (err) {
        console.log(err.message);
    }
}

/*
returns the resolved data of the promise for result_upcoming.csv
*/
exports.getDataResultUpcoming = async function () {
    try {
        return await dalRead.readDataFromCSVFile(result_upcoming);
    } catch (err) {
        console.log(err.message);
    }
}

