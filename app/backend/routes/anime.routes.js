const router = require('express').Router();
let Anime = require('../models/anime.model');

router.route('/').get((req, res) =>{
    Anime.find()
    .then(Anime => res.json(Anime))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newAnime = new Anime({
        name,
        description,
        duration,
        date,    
    });

    newAnime.save()
    .then(() => res.json('Anime added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Anime.findById(req.params.id)
        .then(Anime => res.json(Anime))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Anime.findByIdAndDelete(req.params.id)
        .then(() => res.json('Anime deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Anime.findById(req.params.id)
        .then(Anime => {
            Anime.name = req.body.name;
            Anime.description = req.body.description;
            Anime.duration = Number(req.body.duration);
            Anime.date = Date.parse(req.body.date);

            Anime.save()
                .then(() => res.json('Anime Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;