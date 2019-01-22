const express = require('express')
const path = require("path")
const morgan = require("morgan")
const bodyParser = require('body-parser')

const app = express()

const PORT = 5000

let UserArray = []

app.use(morgan('dev'))

//parses form object from client side and make it available on req.body
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//middleware to serve static files
app.use(express.static(path.join(__dirname, "./public")))

//set up viewing engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get('/login', (req, res) => {
    res.render("login", {
        pageTitle: "Login"
    })
})

app.get('/signup', (req, res) => {
    res.render("signup", {
        pageTitle: "Sign Up"
    })
})

app.get('/', (req, res) => {
    res.render("index", {
        pageTitle: "index"
    })
})

app.post('submitForm', (req, res) => {
    let userObject = req.body
    UserArray.push(userObject)
    console.log(UserArray)
    res.redirect('/')
})

app.listen(PORT,function(){
    console.log("Server is now running")
})