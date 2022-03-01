const db = require('../../api/data/db-config');

function getAllUsers() { return db('users') }

async function insertUser(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

module.exports = {
    getAllUsers,
    insertUser
}