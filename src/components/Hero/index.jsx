import React from 'react';
import Link from 'next/link';
import { Button } from 'src/components/Button';
import HeroImage from 'src/assets/hero-transformed.png';
import styles from 'src/components/Hero/hero.module.scss';
import 'animate.css';
import Image from 'next/image';

export function Hero() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.main}>
        <div
          id={styles.TextForm}
          className="TextForm animate__animated animate__fadeInUpBig"
        >
          <h1>
            O nosso negócio é vender <span>o seu</span>
          </h1>
          <p>
            Nós analisamos o seu negócio e criamos estratégias personalizadas de
            marketing digital.
          </p>

          <Link hreflang="portuguese" href="/formulario">
            <Button title="Formulário gratuito"></Button>
          </Link>
        </div>
        <div
          id={styles.ImageForm}
          className="ImageForm animate__animated animate__fadeInUpBig"
        >
          <Image src={HeroImage} alt="hero" className={styles.heroImage} />
        </div>
      </div>
    </div>
  );
}
