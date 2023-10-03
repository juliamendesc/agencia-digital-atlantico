import React, { useState } from 'react';
import Image from 'next/image';
import Logo from 'src/assets/logoatla3.png';
import styles from 'src/components/Header/header.module.scss';
import 'animate.css';
import NextLink from 'next/link';
import { Link } from 'react-scroll';

export function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
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

        <div className={styles.navList}>
          <div className={styles.navListHeader}>
            <button className={styles.navLink}>
              <Link
                hrefLang="portuguese"
                to={'/home'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                href="/"
              >
                Home
              </Link>
            </button>
          </div>
          <div className={styles.navListHeader}>
            <button className={styles.navLink}>
              <Link
                hrefLang="portuguese"
                to={'servicos'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                href="#servicos"
              >
                Serviços
              </Link>
            </button>
          </div>
          <div className={styles.navListHeader}>
            <button className={styles.navLink}>
              <Link
                hrefLang="portuguese"
                to={'beneficios'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                href="/#beneficios"
              >
                Benefícios
              </Link>
            </button>
          </div>
          <div className={styles.navListHeader}>
            <button className={styles.navLink}>
              <Link
                hrefLang="portuguese"
                to={'quemsomos'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Quem Somos
              </Link>
            </button>
          </div>

          <div className={styles.navListHeader}>
            <button className={styles.navLink}>
              <Link
                hrefLang="portuguese"
                to={'faq'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                FAQ
              </Link>
            </button>
          </div>

          <div className={styles.navListHeader}>
            <button className={styles.navLink}>
              <NextLink
                hrefLang="portuguese"
                href="/atendimento"
                className={styles.navLink}
              >
                Atendimento
              </NextLink>
            </button>
          </div>
        </div>

        <button id={styles.btnHeader} title="Solicitar orçamento">
          <NextLink href="/atendimento">Solicitar orçamento</NextLink>
        </button>
      </nav>
    </header>
  );
}
