var express = require('express');
var router = express.Router();

const footballBL = require('../models/footballBL');

router.get("/", function(req,res,next){
  res.send("Welcome To My Football Service!");
});


//Get list of matches by team.
router.get('/team/:teamName', function (req, res, next) {
  const name = req.params.teamName;
  const resp = footballBL.getListMatchesByTeam(name);
  res.status(200).json(resp);
});

//Get list of matches by team filtered by status
router.get('/team/:teamName/:status', function (req, res, next) {
  const name = req.params.teamName;
  const status = req.params.status;
  const resp = footballBL.getListMatchesByTeamAndStatus(name,status);
  res.status(200).json(resp);
});

//Get list of matches by tournament
router.get('/tournament/:tournamentName', function (req, res, next) {
  const name = req.params.tournamentName;
  const resp = footballBL.getListMatchesByTournament(name);
  res.status(200).json(resp);
});

//Get list of matches by tournament filtered by status
router.get('/tournament/:tournamentName/:status', function (req, res, next) {
  const name = req.params.tournamentName;
  const status = req.params.status;
  const resp = footballBL.getListMatchesByTournamentAndStatus(name,status);
  res.status(200).json(resp);
});

router.get("*", function(req,res,next){
  res.send("Page does not exist!");
});

module.exports = router;
