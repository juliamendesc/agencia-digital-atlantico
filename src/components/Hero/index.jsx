'use client';
import React from 'react';

import Image from 'next/image';
import GifGreen from '../../assets/hero-min.png';
import styles from './hero.module.scss';

import  Button  from '../Button';

import 'animate.css';

export function Hero() {
  return (
    
    <div className={styles.container}>
      <div className={styles.main}>
        <div
          id={styles.TextForm}
          className="TextForm animate__animated animate__fadeInUpBig">
          <h1>
            Nosso
            <br /> negócio é<br /> vender <span>o seu</span>{' '}
          </h1>
          <p>
            Aperte no botão e complete o cadastro para receber nossa assessoria
            de investimento especializada em{' '}
            <strong>Facebook/Instagram Ads e Google Ads.</strong>
          </p>

          <Button
            className={styles.bn3637}
            href="/"
            title="aplicar formulário"></Button>
        </div>

        <div id={styles.GifGreen}>
          <Image src={GifGreen} alt="Gif" width={600} />
        </div>

      </div>
    </div>
  );
}

export default Hero;
