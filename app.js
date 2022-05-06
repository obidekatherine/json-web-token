require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()


const notFoundMiddleware = require('./main/middleware/not-found')
const errorHandleMiddleware = require('./main/middleware/error-handler')


//middleware
app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)
app.use(express.static('./public'))


//express middleware
app.use(express.json())// one of the route is a post route and i want to access req.body



const port = process.env.PORT || 4000;

const start = async ()=> {
try {
    app.listen(port, console.log(`Server is listening on port ${port}...`))
} catch (error) {
    console.log(error);
}
}

start()
