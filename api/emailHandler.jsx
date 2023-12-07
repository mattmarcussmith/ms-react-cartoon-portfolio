

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp-gmail.com',  
  port: 587,  
  secure: false,  
  auth: {
    user: 'matt.marcus.smith@gmail.com',  
    pass: 'Webdeveloper1992!', 
  },
});

const emailHandler = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: 'matt.marcus.smith@gmail.com',  // Use your email address
      to: 'matt.marcus.smith@gmail.com',  // Use the recipient's email address
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
