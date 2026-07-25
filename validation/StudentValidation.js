const { body } = require("express-validator");

const studentValidation = [

    body("rollNo")
        .trim()
        .notEmpty()
        .withMessage("Roll No is required")
        .bail()
        .isNumeric()
        .withMessage("Roll No must contain only numbers"),

    body("studentName")
        .trim()
        .notEmpty()
        .withMessage("Student Name is required")
        .bail()
        .matches(/^[A-Za-z ]+$/)
        .withMessage("Student Name should contain only alphabets"),

    body("fatherName")
        .trim()
        .notEmpty()
        .withMessage("Father Name is required")
        .bail()
        .matches(/^[A-Za-z ]+$/)
        .withMessage("Father Name should contain only alphabets"),

    body("aadharCardNo")
        .trim()
        .notEmpty()
        .withMessage("Aadhar Card Number is required")
        .bail()
        .matches(/^\d{12}$/)
        .withMessage("Aadhar Card Number must be 12 digits"),

    body("mobileNo")
        .trim()
        .notEmpty()
        .withMessage("Mobile Number is required")
        .bail()
        .matches(/^[6-9]\d{9}$/)
        .withMessage("Enter a valid 10 digit Mobile Number")

];

module.exports = studentValidation;