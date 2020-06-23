const os = require('os')
const net = require('net')

console.log(os.arch())

const server = net.createServer()
const client = net.createConnection({port: 8124}, ()=>{
    console.log("connected")
})