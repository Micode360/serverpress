const router = require('express').Router();
// const nodemailer = require('nodemailer');
const kingsData = require('../models/structure-base');
// const { body, check, validationResult } = require('express-validator');


router.post('/kingpress/data/message/senddata', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;


    const newUserData = new kingsData({
        name,
        email,
        subject,
        message
    });


    newUserData.save()
    .then(()=> res.json('Data Sent'))
    .catch(err => res.status(400).json('Reg Error' + err));

});



 
module.exports = router;
