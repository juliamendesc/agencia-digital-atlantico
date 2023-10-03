import React from 'react';
import Image from 'next/image';
import styles from 'src/components/Footer/footer.module.scss';
import emailIcon from 'src/assets/mail.svg';
import phoneIcon from 'src/assets/phone.svg';
import NextLink from 'next/link';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';

// Or Access Link,Element,etc as follows

export function Footer() {
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
    <footer className={styles.footerWrapper}>
      <div className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <h1>
            Agência <span>Digital Atlântico</span>
          </h1>

          <p className={styles.footerLinks}>
            <button onClick={() => scrollToPage('home')}>Home</button>

            <button onClick={() => scrollToPage('servicos')}>Serviços</button>

            <button onClick={() => scrollToPage('beneficios')}>
              Benefícios
            </button>

            <button onClick={() => scrollToPage('quemsomos')}>
              Quem Somos
            </button>

            <button onClick={() => scrollToPage('faq')}>FAQ</button>

            <button>
              <NextLink hrefLang="portuguese" href="/contactos">
                Atendimento
              </NextLink>
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
            <NextLink href="mailto:digitalatlantico.pt@gmail.com">
              <p>digitalatlantico.pt@gmail.com</p>
            </NextLink>
          </div>
        </div>
      </div>

      <div className={styles.footerCompanyName}>
        Agência Digital Atlântico © 2023
      </div>
    </footer>
  );
}
