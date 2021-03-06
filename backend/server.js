const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect('mongodb+srv://haifive123:%23Emachines123@mernclassproject.bojr5ih.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen('4000', () => {
      console.log('listening for requests on port', '4000')
    })
  })
  .catch((err) => {
    console.log(err)
  }) 