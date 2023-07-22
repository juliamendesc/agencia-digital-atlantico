import React from 'react'
import  Styles from './parallax.module.scss'

import Image from 'next/image';
import info from '../../assets/infografo-min-p-1080.png'
import Button from '../Button';

import 'animate.css';

export function Section() {
  return (
    <div className={Styles.wrapper}>
        <main className={Styles.main}>
            <section className={Styles.parallax1}>
                <h3>Atendimento</h3>
                <h1>Quem somos</h1>
                <p>Nós somos seus <span>assessores de investimento.</span>
                    Vamos investir seu dinheiro em ações de marketing e validar estratégias que tragam mais <span>resultado</span>. Quando encontramos as 
                    <span>melhores estratégias</span>  
                        nós investiremos mais e mais nelas.</p>
            </section>

            <section className={Styles.info}>
                <div className="container1">
                <Image src={info} />
                </div>
                <Button className={Styles.bn31} href="/" title='button'> 
                <span className={Styles.bn31span}>
                    Button</span>
                </Button>
            </section>
        </main>
    </div>
  )
}

export default Section
