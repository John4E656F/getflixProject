const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').get((req, res) =>{
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post((req, res) => {
    const username = req.body.username;

    const newUser = new Users({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;