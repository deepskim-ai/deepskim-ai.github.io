import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Deepskim <deepskim.ai@gmail.com>',
      to: 'deepskim.ai@gmail.com',
      subject: `New message from ${name}`,
      reply_to: email,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ error: 'Email send failed' });
  }
}
