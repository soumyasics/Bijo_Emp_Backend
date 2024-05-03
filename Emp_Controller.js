const { Emp_Signup_data } = require('./Emp_Schema')
const Emp_schema=require('./Emp_Schema')
const multer = require('multer');
const Emp_Schema = require('./Emp_Schema');



const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).single("emp_profile");

const Emp_Profile_Update=(req,res)=>{
    
    const emp_id=req.body.empid
    const emp_fname=req.body.emp_fname
    const emp_lname=req.body.emp_lname
    const emp_dateofbirth=req.body.emp_dateofbirth
    const emp_email=req.body.emp_email
    const emp_phone=req.body.emp_phone
    const emp_whatsapp=req.body.emp_whatsapp
    const emp_address=req.body.emp_address
    const emp_country=req.body.emp_country
    const emp_postal=req.body.emp_postal
    const emp_password=req.body.emp_password
    const file=req.file
    Emp_Signup_data.findByIdAndUpdate(emp_id,{
        Emp_Fname:emp_fname,
        Emp_Lname:emp_lname,
        Emp_Data_of_Birth:emp_dateofbirth,
        Emp_Email:emp_email,
        Emp_Phone:emp_phone,
        Emp_Whatsapp:emp_whatsapp,
        Emp_Address:emp_address,
        Emp_Country:emp_country,
        Emp_Postal:emp_postal,
        Emp_Password:emp_password,
        Emp_Profile:file
    })
    .then(data=>{
        res.json({'data':data})
    })
    .catch(err=>{
        res.json({'err':err})
    })
}

const Emp_Register=(req,res)=>{

    let Emp_Signup=new Emp_schema.Emp_Signup_data({
        Emp_Fname:req.body.emp_fname,
        Emp_Lname:req.body.emp_lname,
        Emp_Data_of_Birth:req.body.emp_dateofbirth,
        Emp_Email:req.body.emp_email,
        Emp_Phone:req.body.emp_phone,
        Emp_Whatsapp:req.body.emp_whatsapp,
        Emp_Address:req.body.emp_address,
        Emp_Country:req.body.emp_country,
        Emp_Postal:req.body.emp_postal,
        Emp_Password:req.body.emp_password,
        Emp_Profile:req.file
    
    })

    Emp_Signup.save()
    .then(data=>{
        if(data==null){
            res.json({
                status:401,
                message:'Please Fill the Form'
        })
        }
        else if(data.Emp_Fname==null){
            res.json({
                status:402,
                message:'Enter First Name'
        })
        }else if(data.Emp_Lname==null){
            res.json({
                status:403,
                message:"Enter Last Name"
            })
        }
        else if(data.Emp_Data_of_Birth==null){
            res.json({
                status:404,
                message:"Enter Date of Birth"
            })
        }
        else if(data.Emp_Email==null){
            res.json({
                status:405,
                message:"Enter Email Id"
            })
        }
        else if(data.Emp_Phone==null){
            res.json({
                status:406,
                message:"Enter Phone Number "
            })
        }
        else if(data.Emp_Whatsapp==null){
            res.json({
                status:407,
                message:"Enter Whatsapp Number"
            })
        }
        else if(data.Emp_Country==null){
            res.json({
                status:408,
                message:"Enter Country"
            })
        }
        else if(data.Emp_Postal==null){
            res.json({
                status:409,
                message:"Enter Postal Code"
            })
        }
        else if(data.Emp_Password==null){
            res.json({
                status:410,
                message:"Enter Strong Password"
            })
        }
        else{
            res.json({
                status:200,
                message:"Registration Submitted Successfully",
                "data":data
            })
        }
    })
    .catch(err=>{
        res.json({'err':err})
    })
}

const Emp_Reg=(req,res)=>{
    
    let Emp_reg=new Emp_Schema.Emp_Reg_data({
        Emp_Fullname:req.body.emp_fullname,
        Emp_Email:req.body.emp_email,
        Emp_Password:req.body.emp_password,
        Emp_Profile:req.file

    })
    Emp_reg.save()
    .then(data=>{
        res.json({'data':data})
    })
    .catch(err=>{
        res.json({'err':err})
    })

}

const Emp_Login=(req,res)=>{
    
    const email=req.body.emp_email
    const password=req.body.emp_password
    Emp_Signup_data.findOne({Emp_Email:email})
    
    .exec()
    .then(data=>{
        if(data==null){
            res.json({
                status:401,
                message:'No user found'
        })
        }else if(data.Emp_Password!=password){
            res.json({
                status:402,
                message:"Incorrect Password"
            })
        }
        else{
            res.json({
                status:200,
                message:"login Success",
                "data":data
            })
        }
    })
    .catch(err=>{
        res.json({
            "err":err
        })
    })
}

const Emp_Forgot_Password=(req,res)=>{
    const email=req.body.emp_email
    Emp_Signup_data.findOne({Emp_Email:email})

    .exec()
    .then(data=>{
        if(data==null){
            res.json({
                status:401,
                message:'No user found'
        })
        }
        else if(data.Emp_Email!=email){
            res.json({
                status:402,
                message:"No user found"
            })
        }
        else{
            res.json({
                status:200,
                message:"Success",
                "data":data
            })
        }
        })
        .catch(err=>{
            res.json({
                "err":err
            })
        })
}

const Emp_Update_Password=(req,res)=>{
    const emp_email=req.body.emp_email
    const emp_new_password=req.body.emp_new_password
    const emp_confirm_password=req.body.emp_confirm_password
    
    Emp_Signup_data.findOneAndUpdate({Emp_Email:emp_email},{Emp_Password:emp_confirm_password})
    .exec()
    .then(data=>{
        if(data==null){
            res.json({
                status:401,
                message:'No user found'
            })
        }
        else{
            res.json({
                status:200,
                message:"Success",
                "data":data
            })
        }
    })
    .catch(err=>{
        res.json(err)
    })
    
}


const Emp_Display_Profile=(req,res)=>{
    const emp_id=req.body.emp_id
    Emp_Signup_data.findById({_id:emp_id})
    .exec()
    .then(data=>{
        res.json({
            status:200,
            message:"Success",
            "data":data
        })
    })
    .catch(err=>{
        res.json(err)
    })
}



module.exports={Emp_Profile_Update,Emp_Register,Emp_Login,Emp_Forgot_Password,Emp_Update_Password,Emp_Display_Profile,upload,Emp_Reg}
