const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const axios = require('axios')
const path = require("path")
require('dotenv').config()



const app = express()
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



const port = process.env.PORT || 4000

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "public", "index.html"));
});

app.listen(port, ()=>{console.log(`Server listening on port ${port}`)})
