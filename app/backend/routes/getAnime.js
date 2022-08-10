const router = require('express').Router();
const Animes = require('../models/animeDB.js');

router.route('/').get((req, res) => {
    Animes.find()
    .then(series => res.json(series))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;