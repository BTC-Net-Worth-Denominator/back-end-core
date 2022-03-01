const router = require('express').Router();
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res, next) => {
    res.json('register endpoint')
})

router.post('/login', (req, res, next) => {
    res.json('login endpoint')
})

router.get('logout', (req, res, next) => {
    res.json('logout endpoint')
})

module.exports = router;