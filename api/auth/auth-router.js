// Imports
const router = require('express').Router();
const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./secrets/index');
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

// function buildToken (user) {
//     const payload = {
//         subject: user.user_id,
//         username: user.username
//     }
//     return jwt.sign(payload, JWT_SECRET)
// }

// endpoint not working, returning: "Cannot read property 'password' of undefined"

router.post('/login', (req, res, next) => {


    if (bcrypt.compareSync(req.body.password, req.user.password)) {

      req.session.user = req.user 
      res.json({ message: `Welcome ${req.user.username}`})

    } else {
      next({ status: 401, message: 'Invalid credentials'})
    }

})

// endpoint not working, returning: "Cannot read property 'user' of undefined"

router.get('/logout', (req, res, next) => {

    if (req.session.user) {
        req.session.destroy( err => {
            if (err) {
                next(err)
            } else {
                res.json({ message: 'You successfully logged out.'})
            }
        })
    } else {
        res.json({ message: 'Logout failed, user was not logged in.'})
    }
})

module.exports = router;