var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

app.use(bodyParser.urlencoded({
    extended:false
})
)

const mongoURI = 'mongodb://localhost:27017/mernloginreg'

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(()=>console.log("mongodb connected"))
.catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, () => {
    console.log("server is running on port: "+ port)
})