'use client';
import React from 'react';
import Styles from './section.module.scss';

import Image from 'next/image';
import info from '../../assets/infografo-min-p-1080.png';
import Button from '../Button';
// problemas na importação do fade tentar resolver
import { Fade, Slide } from 'react-awesome-reveal';
import 'animate.css';

export function Section() {
  return (
    <div className={Styles.wrapper}>
      <main className={Styles.main}>
        <section className={Styles.parallax1}>
          <Slide>
            <h3>Atendimento</h3>
            <h1>Quem somos</h1>
          </Slide>
          <Slide delay={1e1} cascade damping={1e-1}>
            <p>
              Nós somos seus <span>assessores de investimento.</span>
              <br />
              Vamos investir seu dinheiro em ações de marketing e validar
              estratégias que tragam mais <span>resultado</span>.<br /> Quando
              encontramos as <span>melhores estratégias</span> nós investiremos
              mais e mais nelas.
            </p>
          </Slide>
        </section>

        <section className={Styles.info}>
          <Slide>
            <div className="container1">
              <Image src={info} />
            </div>
            <Button
              className={Styles.bn3637}
              href="/"
              title="Enviar mensagem"
            ></Button>
          </Slide>
        </section>
      </main>
    </div>
  );
}

export default Section;
