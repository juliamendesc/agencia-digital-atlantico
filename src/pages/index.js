import React from 'react';
import { Hero } from '../components/Hero';
import { Servicos } from '../components/Servicos';
import { CardSocial } from '../components/CardSocial';
// import { FormContact } from '../components/Form';
import { Benefits } from '../components/Benefits';
import { WhoWeAre } from '../components/WhoWeAre';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';

export default function Main() {
  return (
    <div>
      <Hero />
      <Servicos />
      <CardSocial />
      <Benefits />
      <WhoWeAre />
      <Faq />
      {/* <FormContact /> */}
      <Footer />
    </div>
  );
}
