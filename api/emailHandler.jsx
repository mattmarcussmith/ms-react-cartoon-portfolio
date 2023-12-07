
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  
  port: 587,  
  secure: false,  
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.PASSWORD, 
  },
});


const emailHandler = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: 'matt.marcus.smith@gmail.com',  
      to: 'matt.marcus.smith@gmail.com',  
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default emailHandler;
