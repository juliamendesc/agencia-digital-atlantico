import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import React from 'react';
import EmailTemplate from 'react-email-starter/emails/email-template.tsx';

const { GMAIL_USER, GMAIL_FORWARD_TO, EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // type: 'OAuth2',
    user: GMAIL_USER,
    pass: EMAIL_PASSWORD,
    // clientId: OAUTH_CLIENT_ID,
    // clientSecret: OAUTH_SECRET,
    // refreshToken: OAUTH_REFRESH_TOKEN,
    // accessToken: OAUTH_ACCESS_TOKEN,
    // expires: 1484314697598,
  },
});

export default function sendEmail(req, res) {
  const emailHtml = render(
    <EmailTemplate
      sender={req.body.name}
      senderEmail={req.body.email}
      subject={req.body.subject}
      message={req.body.message}
      senderPhone={req.body.phone}
    />,
  );

  const mailData = {
    from: `Digital Atlântico Contact Form <${GMAIL_USER}>`,
    to: GMAIL_FORWARD_TO,
    html: emailHtml,
    subject: `${req.body.subject}`,
  };

  transporter
    .sendMail(mailData)
    .then(() => {
      res.status(200).json({ message: 'Email enviado' });
    })
    .catch((err) => {
      process.env.NODE_ENV !== 'production' && console.log('Erro: ', err);

      res.status(500).json({ error: 'Erro ao enviar o email' });
    });
}
