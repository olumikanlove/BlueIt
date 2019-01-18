const express = require('express')

const path = require("path")

const app = express()

const PORT = 5000

app.use(express.static(path.join(__dirname, "./public")))

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/others/login.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/others/signup.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
})

app.listen(PORT,function(){
    console.log("Server is now running")
})