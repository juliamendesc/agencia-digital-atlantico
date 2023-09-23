import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from 'src/assets/logoatla3.png';
import styles from 'src/components/Header/header.module.scss';
import 'animate.css';
import { Link } from '@mui/material';

export function Header() {
  const [navActive, setNavActive] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const handleLinkClick = () => {
    setNavActive(false);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${navActive ? styles.active : ''}`}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="logo atlântico" width={75} height={75} />
          <div className={styles.textLogo}>
            <h2>
              <span>Agência</span>
              <span>Digital Atlântico</span>
            </h2>
          </div>
        </div>
        <button className={`${styles.hamburger} `} onClick={toggleNav}></button>

        <div className={styles.navList}>
          <Link href="/" className={styles.navLink}>
            <button onClick={handleLinkClick}>Home</button>
          </Link>
          <Link href="/#servicos" className={styles.navLink}>
            <button onClick={handleLinkClick}>Serviços</button>
          </Link>

          <Link href="/#beneficios" className={styles.navLink}>
            <button onClick={handleLinkClick}>Benefícios</button>
          </Link>

          <Link href="/#quemsomos" className={styles.navLink}>
            <button onClick={handleLinkClick}>Quem somos</button>
          </Link>

          <Link href="/#faq" className={styles.navLink}>
            <button onClick={handleLinkClick}>FAQ</button>
          </Link>

          <Link href="/atendimento" className={styles.navLink}>
            <button onClick={handleLinkClick}>Atendimento</button>
          </Link>
        </div>

        <button
          id={styles.btnHeader}
          onClick={() => router.push('/atendimento')}
          title="Solicitar orçamento"
        >
          Solicitar orçamento
        </button>
      </nav>
    </header>
  );
}
