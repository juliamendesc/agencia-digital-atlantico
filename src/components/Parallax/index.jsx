import  Styles from './parallax.module.scss'

import Image from 'next/image';
import info from '../../assets/infografo-min-p-1080.png'

import React from 'react'

export function Section() {
  return (
    <div className={Styles.wrapper}>
        <main className={Styles.main}>
            <section className={Styles.parallax1}>
                <h3>Atendimento</h3>
                <h1>Quem somos</h1>
                <p>Nós somos seus assessores de investimento.
                    Vamos investir seu dinheiro em ações de marketing e validar estratégias que tragam mais resultado. Quando encontramos as melhores estratégias 
                        nós investiremos mais e mais nelas.</p>
            </section>

            <section className='module parallax-1'>
                <div className="container1">
                <Image src={info} />
                </div>
                
            </section>
        </main>
    </div>
  )
}

export default Section
