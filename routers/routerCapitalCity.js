var express = require('express');
var router = express.Router();
const path = require('path');


router.use(function timeLog(req, res, next) {
  next();
});


router.get('/', function(req, res) {
    res.sendFile(path.join( __dirname, "../jeu/CapitalCity/CapitalCity.html"))
});

module.exports = router;