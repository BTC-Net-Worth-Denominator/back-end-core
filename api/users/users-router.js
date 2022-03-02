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
  
router.get('/:user_id', /* add restricted middelware */ (req, res, next) => {
    
        Users.findById(req.params.user_id)
        .then(user => {
          res.json(user);
        })
        .catch(next);

   })

  module.exports = router;

