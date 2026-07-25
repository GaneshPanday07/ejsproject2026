const express = require('express')
const StudentController = require('../Controllers/StudentController')
const router = express.Router();
router.use(express.urlencoded({extended: false}))

//get method: http://localhost:3000/
router.get('/', (req, res)=>{
    StudentController.students(req,res)
})

router.post('/add/student', (req, res)=> {
    StudentController.addstudent(req, res)
})

router.get('/students', (req, res)=> {
    StudentController.getstudents(req,res)
})

router.get('/student/edit/page/:id', (req, res) => {
    StudentController.getStudentForEdit(req, res)
})

router.post('/edit/student/:id', (req, res) => {
    StudentController.editStudent(req, res)
})

router.get('/student/delete/:id', (req, res)=> {
    StudentController.deleteStudent(req, res)
})
module.exports = router
