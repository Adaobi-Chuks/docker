const express = require('express')
const process = require('process')
const app = express()

// stops the container if you do ctrl-c
process.on('SIGINT', () => {
    console.log('Express server is being interrupted...')
    process.exit(0)
})

// stops the container immediately instead of waiting 10 sec if you use 'docker stop containerid'
process.on('SIGTERM', () => {
    console.log('Express server is being terminated...')
    process.exit(0)
})

app.get('/', function (req, res) {
    res.send('Hello from express js file!')
})

app.listen(3000)