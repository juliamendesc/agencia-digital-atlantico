import Head from 'next/head';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { CardSocial } from '@/components/CardSocial';
import { FormContact } from '@/components/Form';
import { Benefits } from '@/components/Benefits';
import { Who } from '@/components/WhoWeAre';
export default function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <Section /> 
      <CardSocial />
      <Benefits />
      <Who/> 
      {/* <FormContact/> */}
    </div>
  );
}
