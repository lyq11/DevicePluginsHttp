const express = require("express")
const bodyParser = require("body-parser")


const deviceClass = require("require-all")({dirname: __dirname + "/path/DeivceClass/"})
const device = require("require-all")({dirname: __dirname + "/path/Device/"})
const plugins = require("require-all")({dirname: __dirname + "/path/Plugin/"})
const deviceProduct = require("require-all")({dirname: __dirname + "/path/deviceProduct/"})
const deviceAuth = require("require-all")({dirname: __dirname + "/path/deviceAuth/"})
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

Object.keys(deviceClass).forEach(function(key){
    app.use(deviceClass[key])
})
Object.keys(device).forEach(function(key){
    app.use(device[key])
})
Object.keys(plugins).forEach(function(key){
    app.use(plugins[key])
})
Object.keys(deviceProduct).forEach(function(key){
    app.use(deviceProduct[key])
})
Object.keys(deviceAuth).forEach(function(key){
    app.use(deviceAuth[key])
})



app.use(function (req, res, next) {
  res.status(404).send("404 Not Found")
})

const hostname = process.env.IP || "0.0.0.0"
const port = process.env.PORT || 3004

app.listen(port, hostname,()=>{
    console.log(`server listening at ${hostname}:${port}`)
})
