require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Sahildotcom')
  })

app.get('/login',(req,res) =>{ 
    res.send('<h1>this a login page </h1>')
  })

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
