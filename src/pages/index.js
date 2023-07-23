import Head from 'next/head'


import  Hero  from '../components/Hero';
import Header  from '../components/Header';
import Section from '../components/Section';

export default function Main() {
  return (
    <div>
      <Header /> 
       <Hero />
       <Section />
    </div>
   
   
  )
}
