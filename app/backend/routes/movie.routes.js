const router = require('express').Router();
// let Movie = require('../models/movie.model');

const addRating = require('../controllers/rating.controller.mjs')

router.route('/newAddedRating').post((req, res) => {
    const value = req.body.value
    const newValue = new Value({
        value
    })

    newValue.save()
    .then(() => res.json('Hooray, I got here! And this is the new value: ' + value))
    .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/').get((req, res) =>{
//     Movie.find()
//     .then(Movie => res.json(Movie))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const name = req.body.name;
//     const description = req.body.description;
//     const duration = Number(req.body.duration);
//     const date = Date.parse(req.body.date);

//     const newMovie = new Movie({
//         name,
//         description,
//         duration,
//         date,    
//     });

//     newMovie.save()
//     .then(() => res.json('Movie added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//     Movie.findById(req.params.id)
//         .then(Movie => res.json(Movie))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//     Movie.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Movie deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     Movie.findById(req.params.id)
//         .then(Movie => {
//             Movie.name = req.body.name;
//             Movie.description = req.body.description;
//             Movie.duration = Number(req.body.duration);
//             Movie.date = Date.parse(req.body.date);

//             Movie.save()
//                 .then(() => res.json('Movie Updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;