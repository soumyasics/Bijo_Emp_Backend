const { default: mongoose } = require("mongoose");

const Emp_Signup_schema=mongoose.Schema({
    Emp_Fname:{
        type:String,
        required:true
    },
    Emp_Lname:{
        type:String,
        required:true
    },
    Emp_Data_of_Birth:{
        type:String,
        required:true
    },
    Emp_Email:{
        type:String,
        required:true
    },
    Emp_Phone:{
        type:String,
        required:true
    },
    Emp_Whatsapp:{
        type:String,
        required:true
    },
    Emp_Address:{
        type:String,
        required:true
    },
    Emp_Country:{
        type:String,
        required:true
    },
    Emp_Postal:{
        type:String,
        required:true
    },
    Emp_Password:{
        type:String,
        required:true
    },
    Emp_Profile:{
        type:Object,
        required:true
    }
})



const Emp_Reg_Schema=mongoose.Schema({
    Emp_Fullname:{
        type:String,
        required:true
    },
    Emp_Email:{
        type:String,
        required:true
    },
    Emp_Password:{
        type:String,
        required:true
    },
    Emp_Profile:{
        type:Object,
        required:true
    },
    
})

var Emp_Signup_data=mongoose.model('Emp_Signup_data',Emp_Signup_schema)
var Emp_Reg_data=mongoose.model('Emp_Reg_data',Emp_Reg_Schema)

module.exports={
    Emp_Signup_data:Emp_Signup_data,
    Emp_Reg_data:Emp_Reg_data

}