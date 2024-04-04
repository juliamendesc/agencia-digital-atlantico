import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  username?: string;
  sender?: string;
  senderEmail?: string;
  senderPhone?: string;
  businessArea?: string;
  businessSize?: string;
  hasHiredPaidAds?: string;
  hasFacebook?: string;
  facebookAccount?: string;
  hasInstagram?: string;
  instagramAccount?: string;
  hasWebsite?: string;
  websiteUrl?: string;
  monthlyBudget?: string;
  subject?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const SessaoEstrategicaEmailTemplate = ({
  username = 'Diogo',
  subject = 'Solicitação de Sessão estratégica com a Digital Atlântico',
  sender = '',
  senderPhone = '',
  senderEmail = '',
  businessArea = '',
  businessSize = '',
  hasHiredPaidAds = '',
  hasFacebook = '',
  facebookAccount = '',
  hasInstagram = '',
  instagramAccount = '',
  hasWebsite = '',
  websiteUrl = '',
  monthlyBudget = '',
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>{username}, tem alguém interessado nos seus serviços!</Preview>
    <Body style={main}>
      <Container style={container}>
        {baseUrl !== '' && (
          <Img
            src={`${baseUrl}/static/digital-atlantico.png`}
            width="120"
            height="80"
            alt="Logo Agência Digital Atlântico"
          />
        )}

        <Text style={title}>
          Olá <strong>{username}</strong>, alguém está interessado nos seus
          serviços.
        </Text>

        <Section style={section}>
          <Text style={text}>
            Remetente: <strong>{sender}</strong>
          </Text>
          <Text style={text}>
            E-mail para contato: <strong>{senderEmail}</strong>
          </Text>
          <Text style={text}>
            Telefone para contato: <strong>{senderPhone}</strong>
          </Text>
          <Text style={text}>
            Assunto: <strong>{subject}</strong>
          </Text>
        </Section>

        <Section style={section}>
          <Text style={text}>Qual o seu setor de negócio? {businessArea}</Text>
          <Text style={text}>
            Tem algum website associado ao seu negócio? {hasWebsite}
          </Text>
          {!!websiteUrl && <Text style={text}>Website: {websiteUrl}</Text>}
          <Text style={text}>
            Tem alguma conta de Instagram associada ao seu negócio?
            {hasInstagram}
          </Text>
          {!!instagramAccount && (
            <Text style={text}>Instagram: {instagramAccount}</Text>
          )}
          <Text style={text}>
            Tem alguma página do Facebook associada ao seu negócio?
            {hasFacebook}
          </Text>
          {!!facebookAccount && (
            <Text style={text}>Facebook: {facebookAccount}</Text>
          )}
          <Text style={text}>
            Quantas pessoas trabalham na empresa: {businessSize}
          </Text>
          <Text style={text}>
            Já alguma vez investiu em publicidade paga? {hasHiredPaidAds}
          </Text>
          <Text style={text}>
            Quanto pretende gastar em anúncios mensalmente? {monthlyBudget}
          </Text>
        </Section>

        <Text style={footer}>
          Não responda a este e-mail. Ele foi enviado automaticamente por meio
          do seu website.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default SessaoEstrategicaEmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
