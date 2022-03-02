const router = require('express').Router();
const Users = require('./users-model');
const { restricted } = require('../auth/auth-middleware');

router.get('/', async (req, res) => {

    try {
    res.json(await Users.getAllUsers())
    } catch (err){
  
      res.status(500).json({ message: 'error in retrieving users'})
    }
  })
  
// router.post('/', async (req, res) => {
//     res.status(201).json(await Users.insertUser(req.body))
//   })

  module.exports = router;

