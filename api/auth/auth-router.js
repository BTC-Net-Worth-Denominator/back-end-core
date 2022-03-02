// Imports

const router = require('express').Router();
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');
const {

    checkUsernameExists,
    checkUsernameFree,
  
  } = require('./auth-middleware');

// Endpoints

router.post('/register', (req, res, next) => {

    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    Users.insertUser({ username, password: hash })
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(next)
})

router.post('/login', (req, res, next) => {
    res.json('login endpoint')
})

router.get('/logout', (req, res, next) => {
    res.json('logout endpoint')
})

module.exports = router;