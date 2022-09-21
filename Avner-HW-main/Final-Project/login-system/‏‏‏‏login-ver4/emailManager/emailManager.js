const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mybasta100@gmail.com',
    pass: 'ltcudebholzrtoap',

  },
  tls: {rejectUnauthorized: false,
},
});


function accountVerificationEmail(destinationAddress){
    let mailOptions = {
        from: 'mybasta100@gmail.com',
        to: destinationAddress,
        subject: 'אנא אשר את החשבון שלך באתר "מיי-בסטה"',
        text: 'test!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = { accountVerificationEmail}