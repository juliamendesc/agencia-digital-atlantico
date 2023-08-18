'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/logoatla4.png';
import styles from './hero.module.scss';
import Button from '../Button';
import 'animate.css';

export function Hero() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.main}>
        <div
          id={styles.TextForm}
          className="TextForm animate__animated animate__fadeInUpBig"
        >
          <h1>
            Nosso negócio é vender <span>o seu</span>
          </h1>
          <p>
            Nós analisamos o seu negócio e criamos estratégias personalizadas de
            <strong> marketing digital.</strong>
          </p>

          <Button
            className={styles.bn3637}
            href="/"
            title="Formulário gratuito"
          ></Button>
        </div>

        <div id={styles.logo}>
          <Image src={Logo} alt="Gif" width={400} />
        </div>
      </div>
    </div>
  );
}
