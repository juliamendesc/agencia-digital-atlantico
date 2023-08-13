import Head from 'next/head';
import { Header } from '../components/Header';
import { Hero }  from '../components/Hero';
import { Section } from '../components/Section';

export default function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <Section />
    </div>
  );
}
