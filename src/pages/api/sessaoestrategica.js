import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import React from 'react';
import SessaoEstrategicaEmailTemplate from 'react-email-starter/emails/big-form-email-template';

const { GMAIL_USER, GMAIL_FORWARD_TO, EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

export default function sendEmail(req, res) {
  const emailHtml = render(
    <SessaoEstrategicaEmailTemplate
      sender={req.body.nome}
      senderEmail={req.body.email}
      senderPhone={req.body.phone}
      businessArea={req.body.businessArea}
      businessSize={req.body.businessSize}
      hasHiredPaidAds={req.body.hasHiredPaidAds}
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
      res.status(200) && res.json({ message: 'Email enviado' });
    })
    .catch((error) => {
      process.env.NODE_ENV !== 'production' && console.log('Erro: ', error);

      res.status(500) && res.json({ message: 'Erro ao enviar o email' });
    });
}
