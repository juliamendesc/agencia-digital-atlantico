import React from 'react';
import { Hero } from 'src/components/Hero';
import { Servicos } from 'src/components/Servicos';
import { CardSocial } from 'src/components/CardSocial';
import { Benefits } from 'src/components/Benefits';
import { WhoWeAre } from 'src/components/WhoWeAre';
import { Faq } from 'src/components/Faq';
import { Footer } from 'src/components/Footer';

export default function Main() {
  return (
    <div>
      <Hero />
      <Servicos />
      <CardSocial />
      <Benefits />
      <WhoWeAre />
      <Faq />
      <Footer />
    </div>
  );
}
