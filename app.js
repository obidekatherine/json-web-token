require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./main/middleware/not-found')
const errorHandleMiddleware = require('./main/middleware/error-handler')


//middleware
app.use(express.static('./public'))  //always place the static folder first
//express middleware
app.use(express.json()); // one of the route is a post route and i want to access req.body

app.use('/api/v1',mainRouter)


app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)




const port = process.env.PORT || 4000;

const start = async ()=> {
try {
    app.listen(port, console.log(`Server is listening on port ${port}...`))
} catch (error) {
    console.log(error);
}
}

start()