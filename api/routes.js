const router = require('express').Router();
// const nodemailer = require('nodemailer');
const kingsData = require('../models/structure-base');
// const { body, check, validationResult } = require('express-validator');


router.post('/tostore/randomunassigned', (req, res) => {
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
    .catch(err => res.status(400).json('Reg Error' + err));

});



// router.post('/message',[
//     //  check('email').not().isEmpty().trim().escape(),
//     body('email').not().isEmpty().withMessage('Fill in your emaii'),
//     body('email').isEmail().withMessage('Not a valid email'),
// //        body('name').not().isEmpty().withMessage('Fill in your name'),
// //        body('name').custom((value,{req}) => {
// //             if(value){
// //               return 'message is working';
// //             }
// // }).withMessage('Name is active at this momemnt'),
//     body('message').not().isEmpty().withMessage('Fill in your message')
// ],(req, res) => {
    

//     let clientMessage = `
//     <h4>${req.body.name}</h4>
//     <h3>${req.body.email}</h3>
//     <h4>${req.body.subject}</h4>
//     <p>${req.body.message}</p>
//  `;
    
//     toMyMail(clientMessage).catch(console.error);
// });



// async function toMyMail(temp) {

//     let transporter = nodemailer.createTransport({
//       // host: "smtp.ethereal.email",
//       // port: 587,
//       // secure: false, 
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL, // generated ethereal user
//         pass: process.env.PASSWORD, // generated ethereal password
//       },
//     });
  
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: process.env.EMAIL, // sender address
//       to: process.env.HOST, // list of receivers
//       subject: "Message from my new Portfolio Website", // Subject line
//       text: "not text yet", // plain text body
//       html: temp, // html body
//     });
  
//   //  console.log("Message sent: %s", info.messageId);
//     console.log('Message sent');
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   }






  

module.exports = router;