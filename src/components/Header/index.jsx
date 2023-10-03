import React, { useState } from 'react';
import Image from 'next/image';
import Logo from 'src/assets/logoatla3.png';
import styles from 'src/components/Header/header.module.scss';
import 'animate.css';
import NextLink from 'next/link';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';

export function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const router = useRouter();
  const scrollTarget = (target) =>
    scroller.scrollTo(target, {
      smooth: true,
      duration: 700,
      spy: true,
      offset: -150,
      hrefLang: 'portuguese',
    });

  const scrollToPage = async (target) => {
    if (router?.location?.pathname !== '/') {
      await router.push('/');
    }
    scrollTarget(target);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${navActive ? styles.active : ''}`}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="logo atlântico" width={75} height={75} />
          <NextLink href="/">
            <div className={styles.textLogo}>
              <h1>Agência</h1>
              <h1>Digital Atlântico</h1>
            </div>
          </NextLink>
        </div>

        <button className={`${styles.hamburger} `} onClick={toggleNav}></button>

        <div className={styles.navList}>
          <div className={styles.navListHeader}>
            <button
              className={styles.navLink}
              onClick={() => scrollToPage('home')}
            >
              Home
            </button>
          </div>
          <div className={styles.navListHeader}>
            <button
              className={styles.navLink}
              onClick={() => scrollToPage('servicos')}
            >
              Serviços
            </button>
          </div>
          <div className={styles.navListHeader}>
            <button
              className={styles.navLink}
              onClick={() => scrollToPage('beneficios')}
            >
              Benefícios
            </button>
          </div>
          <div className={styles.navListHeader}>
            <button
              className={styles.navLink}
              onClick={() => scrollToPage('quemsomos')}
            >
              Quem Somos
            </button>
          </div>

          <div className={styles.navListHeader}>
            <button
              className={styles.navLink}
              onClick={() => scrollToPage('faq')}
            >
              FAQ
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
