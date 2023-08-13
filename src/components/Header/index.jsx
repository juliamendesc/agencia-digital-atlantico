'use client';
import React, { useState } from 'react';
import Styles from './header.module.scss';
import Button from '../Button';
import 'animate.css';
import Image from 'next/image';
import logoAtla from '../../assets/logoatla3.png'


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
          <li><a href="#home">Home</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#quemsomos">Quem somos</a></li>
          <li><a href="#atendimento">Atendimento</a></li>
        </ul>
      <Button id={Styles.btnHeader} title='Solicitar orçamento'/>
      </nav>
    </header>
  
  );
}  
  


   

