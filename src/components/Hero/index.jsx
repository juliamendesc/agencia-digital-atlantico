'use client';
import React from 'react';
import Image from 'next/image';
import GifGreen from '../../assets/logoatla4.png';
import styles from './hero.module.scss';
import   Button   from '../Button';
import 'animate.css';

export function Hero() {
  return (
    <div 
    id='home'
    className={styles.container}>
      <div className={styles.main}>
        <div
          id={styles.TextForm}
          className="TextForm animate__animated animate__fadeInUpBig">
          <h1>
            Nosso
            <br /> negócio é<br /> vender <span>o seu</span>{' '}
          </h1>
          <p>
          Nós analisamos o seu negócio e criamos estratégias
          personalizadas de<strong> marketing digital.</strong>
          </p>

          <Button
            className={styles.bn3637}
            href="/"
            title="Formulário gratuito"></Button>
        </div>

        <div id={styles.GifGreen}>
          <Image src={GifGreen} alt="Gif" width={600} />
          
        </div>

      </div>
    </div>
    
  );
}

