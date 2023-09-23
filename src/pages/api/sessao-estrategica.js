import React from 'react';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import SessaoEstrategicaEmailTemplate from 'react-email-starter/emails/big-form-email-template';

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
    <SessaoEstrategicaEmailTemplate
      sender={req.body.name}
      senderEmail={req.body.email}
      senderPhone={req.body.phone}
      businessArea={req.body.businessArea}
      businessSize={req.body.businessSize}
      hasPaidAds={req.body.hasPaidAds}
      hasFacebook={req.body.hasFacebook}
      facebookAccount={req.body.facebookAccount}
      hasInstagram={req.body.hasInstagram}
      instagramAccount={req.body.instagramAccount}
      hasWebsite={req.body.hasWebsite}
      websiteUrl={req.body.websiteUrl}
      monthlyBudget={req.body.monthlyBudget}
    />,
  );

  const mailData = {
    from: `Digital Atlântico Contact Form <${GMAIL_USER}>`,
    to: GMAIL_FORWARD_TO,
    html: emailHtml,
    subject: 'Solicitação de sessão estratégica',
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
