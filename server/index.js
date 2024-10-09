const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000

app.listen(PORT, () =>{
    console.log(`Backend On Server: ${PORT}`)
})