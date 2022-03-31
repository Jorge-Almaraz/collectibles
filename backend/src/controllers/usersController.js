
const ServiceFactory = require('../services/Factory')
const {respondWithError}= require("../utils/response")
const Boom = require("@hapi/boom")
const { required } = require('joi')

async function getUsers (req, res) {
  try {
    const usersService = await ServiceFactory.getService('users')
    const users = await usersService.listUsers()
    res.json(users)
  } catch (err) {
    return respondWithError(err, res)
  }
}

async function createUser (req, res) {
  try {
    const usersService = await ServiceFactory.getService('users')
    const transaction = await usersService.createUser(req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function getUser (req, res) {

}

async function updateUser (req, res) {
  try {
    const { id } = req.params
    const usersService = await ServiceFactory.getService('users')
    console.log(req.body)
    const transaction = await usersService.updateUser(id, req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function deleteUser (req, res) {
  try {
    const { id } = req.params
    const usersService = await ServiceFactory.getService('users')
    const transaction = await usersService.destroyUser(id)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
}
