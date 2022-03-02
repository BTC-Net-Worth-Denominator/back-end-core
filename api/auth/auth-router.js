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

router.post('/login', async (req, res, next) => {

    const user = await Users.findBy({username: req.body.username}).first()


    if (bcrypt.compareSync(req.body.password, user.password)) {

      res.json({ message: `Welcome ${user.username}`})

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
        res.json({ message: 'Logout failed, user had no session'})
    }
})

module.exports = router;