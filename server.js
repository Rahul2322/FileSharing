const express = require('express')
const app = express()
const ejs = require('ejs')

const PORT = process.env.PORT || 3000

const connectDB = require('./config/db')
connectDB()

app.use(express.json())
app.use(express.static('public'))


//template engine

app.set('view engine','ejs')
app.set('views')

//Routes
app.use('/api/files',require('./routes/files'))
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'))


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)

})