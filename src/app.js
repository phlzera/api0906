const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())


// DB connect

const conn = require('./db/conn')

conn()
app.listen(5000, () => {
    console.log('Servidor online')
})