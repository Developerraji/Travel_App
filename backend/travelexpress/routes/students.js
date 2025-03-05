const express= require('express')
const router=express.Router()
const studentModel= require('../models/studentModel')
const { response } = require('../app')
//localhost:3000/students/create
 router.post('/create',(req,res)=>{
    let students=new studentModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        marks:req.body.marks,
        address:req.body.address
    })
    students.save()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
}
) 

module.exports=router
