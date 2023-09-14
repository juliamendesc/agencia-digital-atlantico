'use client';
import React, { useState } from 'react';
import styles from './header.module.scss';
import 'animate.css';
import Image from 'next/image';
import Logo from '../../assets/logoatla3.png';
import Button from '../Button';
import { Link } from 'react-scroll';

export function Header() {
  const [navActive, setNavActive] = useState(false);

  const GoToAtendimento = () => {
    const atendimento = document.getElementById('atendimento');

    if (atendimento) {
      atendimento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const handleLinkClick = () => {
    setNavActive(false); // Fechar a barra lateral quando se clicka no Link
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${navActive ? styles.active : ''}`}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="logo atlântico" width={75} height={75} />
          <div className={styles.textLogo}>
            <h1>Agência</h1>
            <h1>Digital Atlântico</h1>
          </div>
        </div>
        <button className={`${styles.hamburger} `} onClick={toggleNav}></button>

        <ul className={styles.navList}>
          <li>
            <Link
              href="#home"
              to="home"
              spy={true}
              smooth={true}
              duration={700}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#servicos"
              to="servicos"
              className={styles.navLink}
              smooth={true}
              duration={800}
              onClick={handleLinkClick}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="#beneficios"
              to="beneficios"
              smooth={true}
              duration={700}
              onClick={handleLinkClick}
            >
              Benefícios
            </Link>
          </li>
          <li>
            <Link
              href="#quemsomos"
              to="quemsomos"
              smooth={true}
              duration={700}
              onClick={handleLinkClick}
            >
              Quem somos
            </Link>
          </li>
          <Link
            href="#faq"
            to="faq"
            smooth={true}
            duration={700}
            onClick={handleLinkClick}
          >
            FAQ
          </Link>
          <li>
            <Link
              href="#atendimento"
              to="atendimento"
              smooth={true}
              duration={700}
              onClick={handleLinkClick}
            >
              Atendimento
            </Link>
          </li>
        </ul>

        <Button
          id={styles.btnHeader}
          onClick={GoToAtendimento}
          title="Solicitar orçamento"
        />
      </nav>
    </header>
  );
}
