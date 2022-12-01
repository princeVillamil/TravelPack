const express = require('express')
const app = express()
const logger = require('morgan')

// .ENV
require("dotenv").config({ path: "./config/.env" })

// Logger(morgan)
app.use(logger('dev'))

// app.get('/', (req,res)=>{
//   res.send("This is home page")
// })

app.use("/", mainRoutes)
// app.use('/')

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running in PORT: ${process.env.PORT}`)
})