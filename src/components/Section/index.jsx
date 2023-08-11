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
          <div className="textParallax">
          <Slide>
            <h3>Serviço</h3>
            <h1>Como funciona o serviço</h1>
          </Slide>
            <p>
              <Fade cascade>
              <p>Diariamente coletamos dados indicadores,
              que nos permitem entender os nossos próximos passos,
              </p>
              <p>sendo assim possível uma otimização contínua
              de resultados.</p>
              </Fade>
              <br/>
            
              <Slide>
              <span>
              Realização de análises e pesquisas para compreendermos
              o público-alvo, as suas necessidades, comportamentos
              e preferências.
              </span>
              </Slide>
              <br/>
          
              <Fade cascade>
              <p>A criação e gestão de campanhas de publicidade online.
              Isso envolve o planeamento de orçamentos,
              </p>
              <p> definição de
              público-alvo, seleção de palavras-chave, criação de anúncios
              e otimização contínua das campanhas.
              </p>
              </Fade>
              <br/>
            
              <Slide>
              <span>
              Análise e criação de relatórios, onde utilizamos ferramentas
              de análise de dados, para monitorar e analisar o desempenho
              do tráfego e de todas as campanhas ativas, incluindo relatórios com
              todas as informações detalhadas das métricas.
              </span>
              </Slide>
              <br/>
              <br/>
              <Fade>
              Acompanhamento das tendências do mercado, as melhores práticas e as
              atualizações algorítmicas das plataformas de anúncios.
              Vamos investir seu dinheiro em ações de marketing e validar
              </Fade>
              <br/>
            </p>
          </div>
          <Button
              className={Styles.bn3637}
              href="/"
              title="Enviar mensagem"
            ></Button>
        </section>

        <section className={Styles.info}>
          <Slide>
            <div className="container1">
              {/* <Image src={info} /> */}
            </div>
            
          </Slide>
        </section>

        <section className={Styles.parallax2}>
        <Slide delay={1e1} cascade damping={1e-1}>
         <div className="textParallax">
         <p><span>Estamos preparados para cumprir com nosso único objetivo:</span>
         <br/>
         <br/>
              Ajudar o seu negócio e faturamento a crescer de forma exponencial
              através da internet, com o foco em alcançar novas soluções
              estratégicas e eficazes para o seu negócio.
              </p>
              </div> 
        </Slide>
        </section>
      </main>
    </div>
  );
}

export default Section;
