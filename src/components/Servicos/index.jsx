import React from 'react';
import Image from 'next/image';
import dataCollectionIcon from '@/assets/data-collection.svg';
import styles from '@/components/Servicos/servicos.module.scss';
import 'animate.css';

export function Servicos() {
  return (
    <div id="servicos" className={styles.wrapper}>
      <section>
        <h2>Serviço</h2>
        <h1>Como funciona o serviço</h1>
        <div className={styles.imageWrapper}>
          <div className={styles.paragraphs}>
            <p>
              Diariamente coletamos dados indicadores, que nos permitem entender
              os nossos próximos passos, sendo assim possível uma otimização
              contínua de resultados.
            </p>

            <p>
              Realização de análises e pesquisas para compreendermos o
              público-alvo, as suas necessidades, comportamentos e preferências.
            </p>

            <p>
              A criação e gestão de campanhas de publicidade online. Isso
              envolve o planeamento de orçamentos, definição de público-alvo,
              seleção de palavras-chave, criação de anúncios e otimização
              contínua das campanhas.
            </p>

            <p>
              Análise e criação de relatórios, onde utilizamos ferramentas de
              análise de dados, para monitorar e analisar o desempenho do
              tráfego e de todas as campanhas ativas, incluindo relatórios com
              todas as informações detalhadas das métricas.
            </p>

            <p>
              Acompanhamento das tendências do mercado, as melhores práticas e
              as atualizações algorítmicas das plataformas de anúncios.
            </p>
          </div>
          <aside className={styles.imageConfig}>
            <Image src={dataCollectionIcon} alt="Data Collection Icon" />
          </aside>
        </div>
      </section>

      <section>
        <div className={styles.textGoals}>
          <h2>
            <span>
              Estamos preparados para cumprir com nosso único objetivo:
            </span>
          </h2>

          <p>
            Ajudar o seu negócio e faturamento a crescer de forma exponencial
            através da internet, com o foco em alcançar novas soluções
            estratégicas e eficazes para o seu negócio.
          </p>
        </div>
      </section>
    </div>
  );
}
