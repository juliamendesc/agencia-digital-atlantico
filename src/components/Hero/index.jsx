'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../Button';
import styles from './hero.module.scss';
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
            O nosso negócio é vender <span>o seu</span>
          </h1>
          <p>
            Nós analisamos o seu negócio e criamos estratégias personalizadas de
            marketing digital.
          </p>

          <Link href="/formulario">
            <Button title="Formulário gratuito"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
