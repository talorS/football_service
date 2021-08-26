const db = require('../DAL/matchesDB');

let gamesData = [];

initData();

/*
get the data from the csv files into global array - gamesData
and add a status to each object in the array
*/
async function initData() {
    try { 
        let dataPlayed = await db.getDataResultPlayed();
        dataPlayed = dataPlayed.map(v => ({...v, status: "played"}));

        let dataUpcoming = await db.getDataResultUpcoming();
        dataUpcoming = dataUpcoming.map(v => ({...v, status: "upcoming"}));
        
        gamesData = [...dataPlayed,...dataUpcoming];
    } catch (err) {
        console.log(err.message);
    }
}

/*
get a list of matches filtered by team name
*param name - the name of the football team
*/
exports.getListMatchesByTeam = function (name) {
    return gamesData.filter(team => team.home_team === name || team.away_team === name);
}

/*
get a list of matches filtered by team name and status
*param name - the name of the football team
*param status - the status of the match
*/
exports.getListMatchesByTeamAndStatus = function (name, status) {
    const data = exports.getListMatchesByTeam(name);
    return data.filter(team => team.status === status);
}

/*
get a list of tournaments filtered by tournament name
*param name - the name of the tournament
*/
exports.getListMatchesByTournament = function (name) {
    return gamesData.filter(x => x.tournament === name);
}

/*
get a list of tournaments filtered by tournament name and status
*param name - the name of the tournament
*param status - the status of the match
*/
exports.getListMatchesByTournamentAndStatus = function (name, status) {
    const data = exports.getListMatchesByTournament (name);
    return data.filter(x => x.status === status);
}