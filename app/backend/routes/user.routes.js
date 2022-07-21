const router = require('express').Router();
let Users = require('../models/user.model');

router.route('/').get((req, res) => {
  Users.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/login', async (req, res) => {
  res.send('login page')
})

router.route('/register').post((req, res) => {
  const username = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
})