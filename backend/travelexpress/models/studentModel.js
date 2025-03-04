const mongoose=require('mongoose')
const studentSchema= mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    marks:Number,
    address:String
})
const studentModel=new mongoose.model('students',studentSchema)
module.exports=studentModel