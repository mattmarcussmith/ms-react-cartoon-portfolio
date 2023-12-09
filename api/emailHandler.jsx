const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailHandler = async (req, res) => {
  try {
    // ... your existing code

    const mailOptions = {
      from: 'matt.marcus.smith@gmail.com',  // Use your SendGrid verified email address
      to: 'matt.marcus.smith@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await sgMail.send(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default emailHandler;
