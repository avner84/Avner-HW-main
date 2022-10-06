const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mybasta100@gmail.com',
    pass: 'ltcudebholzrtoap',

  },
  tls: {
    rejectUnauthorized: false,
  },
});


function accountVerificationEmail(destinationAddress, token) {
  let mailOptions = {
    from: 'mybasta100@gmail.com',
    to: destinationAddress,
    subject: 'אנא אשר את החשבון שלך באתר "מיי-בסטה"',
    html: ` <div style="font-family: Arial, Helvetica, sans-serif">
        <h3>ברוך הבא לאתר מיי-בסטה</h3>
        <p>על מנת להשלים את הרישום יש לאמת את חשבונך על ידי לחיצה על <a href="http://localhost:3450/api/confirmAccount?token=${token}">הקישור הזה</a>.
        </p>       
        <p> בברכה, מיי-בסטה מרקט</p>
    </div>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = { accountVerificationEmail }