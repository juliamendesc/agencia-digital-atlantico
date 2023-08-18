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

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${navActive ? styles.active : ''}`}>
        <Image src={Logo} alt="logo atlântico" height="inherit" width={75} />

        <button
          className={`${styles.hamburger} hamburger`}
          onClick={toggleNav}
        ></button>

        <ul className={styles.navList}>
          <li>
            <Link href="#home" to="home" smooth={true} duration={700}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#servicos" to="servicos" smooth={true} duration={800}>
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="#beneficios"
              to="beneficios"
              smooth={true}
              duration={700}
            >
              Benefícios
            </Link>
          </li>
          <li>
            <Link href="#faq" to="faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#quemsomos" to="quemsomos">
              Quem somos
            </Link>
          </li>
          <li>
            <Link href="#atendimento" to="atendimento">
              Atendimento
            </Link>
          </li>
        </ul>

        <Button id={styles.btnHeader} title="Solicitar orçamento" />
      </nav>
    </header>
  );
}
