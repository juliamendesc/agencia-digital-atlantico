'use client';
import React, { useState } from 'react';
import Styles from './header.module.scss';
import 'animate.css';
import Image from 'next/image';
import logoAtla from '../../assets/logoatla3.png';
import Button from '../Button';
import { Link } from 'react-scroll';


export function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={Styles.header}>
     
      <nav className={`${Styles.nav} ${navActive ? Styles.active : ''}`}>

        <Image src={logoAtla} width={200} alt='logo altantico'/>

        <button className={`${Styles.hamburger} hamburger`} onClick={toggleNav}>

        </button>

        <ul className={Styles.navList}>
          <li><Link href="#home" to="home" smooth={true} duration={700}>Home</Link></li>
          <li><Link href="#servicos" to="servicos" smooth={true} duration={800}>Serviços</Link></li>
          <li><Link href="#beneficios"to="beneficios" smooth={true} duration={700}>Benefícios</Link></li>
          <li><Link href="#faq">FAQ</Link></li>
          <li><Link href="#quemsomos">Quem somos</Link></li>
          <li><Link href="#atendimento">Atendimento</Link></li>
        </ul>
      <Button id={Styles.btnHeader} title='Solicitar orçamento'/>
      </nav>
    </header>
  
  );
}  
  


   

