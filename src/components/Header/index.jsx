'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/logoatla3.png';
import styles from './header.module.scss';
import 'animate.css';

export function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const handleLinkClick = (id) => {
    handleScrollClick(id);
    setNavActive(false); // Fechar a barra lateral quando se clica no Link
  };

  function handleScrollClick(id) {
    const el = document.getElementById(id);
    el?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${navActive ? styles.active : ''}`}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="logo atlântico" width={75} height={75} />
          <div className={styles.textLogo}>
            <h1>
              <span>Agência</span>
              <span>Digital Atlântico</span>
            </h1>
          </div>
        </div>
        <button className={`${styles.hamburger} `} onClick={toggleNav}></button>

        <div className={styles.navList}>
          <button
            onClick={() => handleLinkClick('home')}
            className={styles.navLink}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('servicos')}
            className={styles.navLink}
          >
            Serviços
          </button>
          <button
            onClick={() => handleLinkClick('beneficios')}
            className={styles.navLink}
          >
            Benefícios
          </button>
          <button
            onClick={() => handleLinkClick('quemsomos')}
            className={styles.navLink}
          >
            Quem somos
          </button>
          <button
            onClick={() => handleLinkClick('faq')}
            className={styles.navLink}
          >
            FAQ
          </button>
          <button
            onClick={() => handleLinkClick('atendimento')}
            className={styles.navLink}
          >
            Atendimento
          </button>
        </div>

        <button id={styles.btnHeader} title="Solicitar orçamento">
          Solicitar orçamento
        </button>
      </nav>
    </header>
  );
}
