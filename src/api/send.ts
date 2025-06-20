import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Contact Us Page',
      to: 'deepskim.ai@gmail.com',
      subject: `Message from ${name}`,
      reply_to: email,
      html: `<p>${message}</p>`,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Email failed to send' });
  }
};
