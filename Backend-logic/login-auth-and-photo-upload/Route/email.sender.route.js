const express = require("express");
const nodemailer = require("nodemailer");
const EmailRouter = express.Router();
require("dotenv").config()
EmailRouter.post("/send", async(req,res)=>{
const {from_mail,to_mail} = req.body;
const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS
    }
})

const mail_options = {
    from:from_mail,
    to:to_mail,
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // Plain text body
    html: '<b>Hello world?</b>' // HTML body
};

transport.sendMail(mail_options, (err,info)=>{
    if(err){
        console.log(err);
        res.send({message:"mail fail",err})
    
    }
    else{
        console.log({info});
        res.send({message:"mail success",info,nodemailererDetails:nodemailerer.getTestMessageUrl(info)})
    }
});

});

module.exports = EmailRouter;
