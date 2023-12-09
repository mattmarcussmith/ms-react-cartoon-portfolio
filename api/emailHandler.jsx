import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://ms-react-portfolio-dyql4fgp6-matthewmsmith.vercel.app');
res.setHeader('Access-Control-Allow-Methods', 'POST');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

if (req.method === 'OPTIONS') {
    // Preflight request, respond successfully
    res.status(200).end();
    return;
}
  
  try {
    const { senderEmail, subject, text } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'matt.marcus.smith@gmail.com',
      from: senderEmail,
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
