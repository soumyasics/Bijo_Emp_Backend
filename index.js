const express=require('express')
const bodyparser=require('body-parser')
const routes=require('./router')
const cors=require('cors')
const db=require('./dbconnection')
const app=express()
app.use(bodyparser.json())
app.use(cors())
app.use('/',routes)
app.use(express.static(`${__dirname}/upload`))
app.listen(3000,err=>{
    if(err)
    console.log(err)
    else
    console.log('Server Running in 3000 port');
})