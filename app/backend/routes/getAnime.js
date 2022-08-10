const router = require('express').Router();
const Animes = require('../models/animeDB.js');

router.route('/').get((req, res) => {
    Animes.find()
    .then(series => res.json(series))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    const { id } = req.params;
    const getAnime = Animes.find((series) => series.id === id );

    if(!getAnime) {
        res.status(404);
        return;
    }
    getAnime.id= id;
})
res.sendStatus(200);


module.exports = router;