const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Emp_Manage')
const db=mongoose.connection
db.on('error',console.error.bind(console,'Connection Error'))

db.once('open',()=>{
    console.log('Connection Success');
})

module.exports=db