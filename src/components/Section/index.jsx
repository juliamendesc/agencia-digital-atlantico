'use client';
import React from 'react';
import styles from './section.module.scss';
import Image from 'next/image';
import Button from '../Button';
// import { Fade, Slide } from 'react-awesome-reveal';
import 'animate.css';

export function Section() {
  return (
    <div id="servicos" className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.parallax1}>
          <div className={styles.textParallax}>
            {/* <Slide> */}
              <h3>Serviço</h3>
              <h1>Como funciona o serviço</h1>
            {/* </Slide> */}

            {/* <Fade delay={1e2} cascade damping={1e-1}> */}
              <p>
                Diariamente coletamos dados indicadores, que nos permitem
                entender os nossos próximos passos, sendo assim possível uma otimização contínua de resultados.
                </p>

              <p>
                Realização de análises e pesquisas para compreendermos o
                público-alvo, as suas necessidades, comportamentos e
                preferências.
              </p>

              <p>
                A criação e gestão de campanhas de publicidade online. Isso
                envolve o planeamento de orçamentos, 
                definição de público-alvo, seleção de palavras-chave, criação de
                anúncios e otimização contínua das campanhas.
              </p>

              <p>
                Análise e criação de relatórios, onde utilizamos ferramentas de
                análise de dados, para monitorar e analisar o desempenho do
                tráfego e de todas as campanhas ativas, incluindo relatórios com
                todas as informações detalhadas das métricas.
              </p>

              <p>
              Acompanhamento das tendências do mercado, as melhores práticas
               e as atualizações algorítmicas das 
              plataformas de anúncios.

              </p>
            {/* </Fade> */}
          </div>
          <Button
            id={styles.btnMsg}
            href="/"
            title="Enviar mensagem"
          ></Button>
        </section>

        <section className={styles.parallax2}>
          {/* <Slide delay={1e1} cascade> */}
          <div className={styles.textGoals}>
              <h2>
                <span>
                  Estamos preparados para cumprir com nosso único objetivo:
                </span>
                </h2>

                <h2>
                Ajudar o seu negócio e faturamento a crescer de forma
                exponencial através da internet, com o foco em alcançar novas
                soluções estratégicas e eficazes para o seu negócio.
                </h2>
            </div>
          {/* </Slide> */}
          {/* <Fade> */}
           <div className={styles.textSocial}>
          <h1> Serviços para a sua empresa 
            <span>obter resultados</span>
            </h1>
          </div>
          {/* </Fade> */}
        </section>
      </main>
    </div>
  );
}
