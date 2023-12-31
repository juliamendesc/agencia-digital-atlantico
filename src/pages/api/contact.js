import React from 'react';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailTemplate from 'react-email-starter/emails/email-template.tsx';

const {
  GMAIL_USER,
  OAUTH_REFRESH_TOKEN,
  OAUTH_CLIENT_ID,
  OAUTH_SECRET,
  OAUTH_ACCESS_TOKEN,
  GMAIL_FORWARD_TO,
} = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: GMAIL_USER,
    clientId: OAUTH_CLIENT_ID,
    clientSecret: OAUTH_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN,
    accessToken: OAUTH_ACCESS_TOKEN,
    expires: 3599,
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
      res.status(200) && res.json({ message: 'Email sent' });
    })
    .catch((error) => {
      res.status(500);
      res.json({ message: 'Something went wrong', error });
    });
}
