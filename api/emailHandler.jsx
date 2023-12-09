
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'https://matthewmsmithportfolio.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.status(200).end();
    return;
  }
  try {
    const { to, subject, text } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to,
      from: 'matt.marcus.smith@gmail.com', 
      subject,
      text,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
