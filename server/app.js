const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose')
const morgan = require('morgan');
const express = require('express');

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config( { path: path.resolve('.env.dev')})
} 

const PORT = process.env.PORT || 3000;

const app = express()
    .use(cors())
    .use(morgan('combined'))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname,'..', 'public')))

app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", 'public/index.html')
        )
    })

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))

