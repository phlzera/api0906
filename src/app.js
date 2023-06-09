const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')
const app = express();
app.use(cors())
app.use(express.json())
conn()

const routes = require('./routes/router');

app.use('/api', routes)

app.listen(5000, () => {
    console.log('Servidor online')
})