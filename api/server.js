const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const Users = require('./users/users-model');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/', (req, res) => {
  res.json('BTC Net Worth API - Root')
})

server.get('/api/users', async (req, res) => {

  try {
  res.json(await Users.getAllUsers())
  } catch (err){

    res.status(500).json({ message: 'error in retrieving users'})
  }
})

server.post('/api/users', async (req, res) => {
  res.status(201).json(await Users.insertUser(req.body))
})

module.exports = server
