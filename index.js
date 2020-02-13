// implement your API here
const express = require("express")

const db = require("./data/db.js")

const port = 7101
const host = "127.0.0.1"
const server = express()

//  middleware that allows express to parse json request
server.use(express.json())


server.get("/", (req, res) => {
  res.json({message: "Hello World!"})
})

// server.get("/", (req, res) => {
    
// })

server.get("/api/users", (req, res) => {
  db.find()
  .then(res => {
    res.json(res)
  })
  .catch(err => {
    res.status(500).send( {message: "Not Working"} )
  })
  
})

// server.get("/api/users/:id", (req, res) => {

// })

server.listen(port, host , () => {
    console.log(`server started at port ${port}`)
})