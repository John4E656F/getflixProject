// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = require('express').Router();
const bcrypt = require('bcrypt');
/*Same as the code above
const express = require("express");
const router = express.Router();
*/

const handleLogin = require("../controllers/login.controller");


//Importing the connection to the database
const db = require("../config/connectDB");

let User = require('../models/users.model');

//Get a list of all users.
// router.route('/user').get((req, res) => {
//     let db_connect = db.getDb("users");
//     db_connect
//     .collection("users")
//     .find({})
//     .toArray((err, res) => {
//         if (err) throw err;
//         res.json(result);
//     });
// });

router.route('/').get((req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.post("/login", handleLogin);
router.route('/login').post(handleLogin);

router.route('/signup').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 8);

    const newUser = new User({
        username,
        email,
        password,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const { email, password } = req.body;

    const getUser = User.find((users) => users.email === email);

    if (!getUser) {
        res.sendStatus(404);
        return;
    }
    getUser.email = email;
    getUser.password = password;

    res.sendStatus(200);
})

router.put('/update/:id', (req, res) => {
    const { id } = req.param;
    const { newUsername, newEmail, newPassword } = req.body;

    const getUser = User.find((users) => users.id === id);

    if(!getUser) {
        res.sendStatus(404);
        return;
    }

    getUser.username = newUsername;
    getUser.email = newEmail;
    getUser.password = newPassword;

    res.sendStatus(200);
});

module.exports = router;