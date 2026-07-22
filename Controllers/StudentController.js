const Student = require('../models/Student')

const students = (req, res)=> {
    res.render('home')
}

const addstudent = async(req, res)=> {
    try{
        console.log(req.body)
        const student = new Student(req.body)
        await student.save()
        res.render('addStudentSuccess')
    } catch(err){
        console.log(err)
    }
}

const getstudents = async(req, res)=> {
    try{
        let students = await Student.find({}); 
        res.render('studentlist', {
            students: students
        })
    } catch(err){
        console.log(err)
    }
}

const getStudentForEdit = async(req, res) => {
    try{
        let id = req.params.id;
        let student = await Student.findOne({ _id: id})
        console.log(student)
        res.render('studenteditpage', {
            student: student
        })
    } catch(err){
        console.log(err)
    }
}

const editStudent = async(req, res) => {
    try{
        let id = req.params.id;
        console.log(req.body)
        let student = await Student.findOne({ _id: id})
        student.rollno = req.body.rollno;
        student.studentName = req.body.studentName;
        student.fatherName = req.body.fatherName;
        student.adharCardNo = req.body.adharCardNo;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students = await Student.find({})
        res.render('studentlist', { students: students})
    } catch(err){
        console.log(err)
    }
}

const deleteStudent = async(req, res) => {
    try{
        let id = req.params.id;
        await Student.deleteOne({ _id : id})
        let students = await Student.find({})
        res.render('studentlist', {
            students: students
        })

    } catch(errr) {
        console.log(err)
    }
}
module.exports = {
  students,
  addstudent,
  getstudents,
  getStudentForEdit,
  editStudent,
  deleteStudent,
};