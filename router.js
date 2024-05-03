const express=require('express')
const router=express.Router()
const employeeController=require('./Emp_Controller')


router.post('/emp_signup',employeeController.upload,employeeController.Emp_Register)
router.post('/emp_login',employeeController.Emp_Login)
router.post('/emp_forgot_password',employeeController.Emp_Forgot_Password)
router.post('/emp_update_password',employeeController.Emp_Update_Password)
router.post('/emp_display_profile',employeeController.Emp_Display_Profile)
router.post('/emp_reg',employeeController.upload,employeeController.Emp_Reg)
router.post('/emp_profile_update',employeeController.upload,employeeController.Emp_Profile_Update)




   
module.exports=router