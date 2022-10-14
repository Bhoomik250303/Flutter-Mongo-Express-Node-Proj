const express = require('express')
const morgan  = require('morgan')
const cors  = require('cors')
const connectDB  = require('./config/db')
const passport = require('passport')
const bodyparser = require('body-parser')
const { connect } = require('mongoose')
const app = express() 
const routes = require('./routes/index')

connectDB();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json())
app.use(routes)

const port = process.env.port || 3000
app.listen(port, console.log("Server running on" +  port + "in" + process.env.NODE_ENV))