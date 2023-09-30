import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from 'src/components/Footer/footer.module.scss';
import emailIcon from 'src/assets/mail.svg';
import phoneIcon from 'src/assets/phone.svg';
import Link from 'next/link';

export function Footer() {
  const router = useRouter();

  function handleClick(id) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ top: 100, behavior: 'smooth' });
  }

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <h1>
            Agência <span>Digital Atlântico</span>
          </h1>

          <p className={styles.footerLinks}>
            <button onClick={() => handleClick('home')}>Home</button>
            <button onClick={() => handleClick('servicos')}>Serviços</button>
            <button onClick={() => handleClick('beneficios')}>
              Benefícios
            </button>
            <button onClick={() => handleClick('quemsomos')}>Quem Somos</button>
            <button onClick={() => handleClick('faq')}>FAQ</button>
            <button onClick={() => router.push('/atendimento')}>
              Atendimento
            </button>
          </p>
        </div>

        <div className={styles.footerCenter}>
          <div>
            <Image src={phoneIcon} alt="logo" width={20} height={20} />
            <p>(+351) 914 323 149</p>
          </div>

          <div>
            <Image src={emailIcon} alt="logo" width={20} height={20} />
            <Link href="mailto:digitalatlantico.pt@gmail.com">
              <p>digitalatlantico.pt@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footerCompanyName}>
        Agência Digital Atlântico © 2023
      </div>
    </footer>
  );
}
