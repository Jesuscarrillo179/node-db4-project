const express = require('express')

const server = express()

const recipesRouter = require('../recipes/recipe-router')

server.use(express.json())
server.use('/api/recipes', recipesRouter)

module.exports = server;
