const db = require('../../api/data/db-config');

function getAllUsers() { 
  return db('users') 
    .select('user_id', 'username')

}

function findBy (filter){
  return db('users')
    .where(filter)
}

function findById(user_id) {

    return db('users')
    .select('user_id', 'username')
    .where('users.user_id', user_id).first()

}

// write function
// select * from assets where UserId = loginIn user

async function insertUser(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

module.exports = {

    getAllUsers,
    findBy,
    findById,
    insertUser
}