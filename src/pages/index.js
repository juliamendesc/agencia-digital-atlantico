import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import '../styles/globals.css'

import  Hero  from '../components/Hero';
import Header  from '../components/Header';
import Section from '../components/Parallax';

export default function Main() {
  return (
    <div>
      <Header /> 
       <Hero />
       <Section />
    </div>
   
   
  )
}
