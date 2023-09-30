import React from 'react';
import Image from 'next/image';
import styles from 'src/components/Footer/footer.module.scss';
import emailIcon from 'src/assets/mail.svg';
import phoneIcon from 'src/assets/phone.svg';
import NextLink from 'next/link';
import { Link } from 'react-scroll';

// Or Access Link,Element,etc as follows

export function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <h1>
            Agência <span>Digital Atlântico</span>
          </h1>

          <p className={styles.footerLinks}>
            <button>
              <Link
                to={'home'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Home
              </Link>
            </button>

            <button>
              <Link
                to={'servicos'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Serviços
              </Link>
            </button>

            <button>
              <Link
                to={'beneficios'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Benefícios
              </Link>
            </button>

            <button>
              <Link
                to={'quemsomos'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Quem Somos
              </Link>
            </button>

            <button>
              <Link
                to={'faq'}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                FAQ
              </Link>
            </button>

            <button>
              <NextLink href="/contactos">Atendimento</NextLink>
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
