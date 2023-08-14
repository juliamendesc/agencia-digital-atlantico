'use client';
import React from 'react';
import Styles from './section.module.scss';
import Image from 'next/image';
import Button from '../Button';
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

              <Fade cascade>
              <p>Diariamente coletamos dados indicadores,
              que nos permitem entender os nossos próximos passos,
              </p>
              <p>sendo assim possível uma otimização contínua
              de resultados.</p>
              </Fade>
              <br/>
            
              <Fade cascade>
              <p>
              Realização de análises e pesquisas para compreendermos
              o público-alvo, as suas necessidades, comportamentos
              e preferências.
              </p>
            
              </Fade>
              
              <Fade cascade>
              <p>
              A criação e gestão de campanhas de publicidade online.
              Isso envolve o planeamento de orçamentos,
              </p>
              <p> 
              definição de
              público-alvo, seleção de palavras-chave, criação de anúncios
              e otimização contínua das campanhas.
              </p>
              </Fade>
              <br/>
            
              <Fade cascade> 
              <p>
              Análise e criação de relatórios, onde utilizamos ferramentas
              de análise de dados, para monitorar e analisar o desempenho
              do tráfego e de todas as campanhas ativas, incluindo relatórios com
              todas as informações detalhadas das métricas.
              </p>
              </Fade>
              <br/>
              <br/>
              
              <Fade>
              <p>
              Acompanhamento das tendências do mercado, as melhores práticas e as
              atualizações algorítmicas das plataformas de anúncios.
              Vamos investir seu dinheiro em ações de marketing e validar
              </p>
              </Fade>
              <br/>
          </div>
          <Button
              className={Styles.bn3637}
              href="/"
              title="Enviar mensagem"
            ></Button>
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


