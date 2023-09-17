'use client';

import React from 'react';
import Image from 'next/image';
import checkLogo from '../../assets/checklogo.svg';
import styles from './benefits.module.scss';

const benefitsList = [
  'Otimização e Maximização do investimento aplicado em publicidade.',
  'Aumento de tráfego qualificado, com técnicas de direcionamento e segmentação.',
  'Análise e monitoramento contínuo de resultados.',
  'Conhecimento especializado em plataformas de anúncios.',
  'Aumento da visibilidade e reconhecimento da marca.',
  'Foco nos resultados e metas do seu negócio.',
];

const beneficiosCheckList = [
  {
    description: ' Estratégias exclusivas e personalizadas',
    alt: 'checkmark',
    src: checkLogo,
  },
  {
    description: ' Aos nossos processos e métodos',
    alt: 'checkmark',
    src: checkLogo,
  },
  {
    description: ' Profissionais especializados e capacitados',
    alt: 'checkmark',
    src: checkLogo,
  },
  {
    description: ' Textos e imagens personalizadas',
    alt: 'checkmark',
    src: checkLogo,
  },
  {
    description: ' Relatórios personalizados',
    alt: 'checkmark',
    src: checkLogo,
  },
  {
    description: ' Relatórios mensais de resultados',
    alt: 'checkmark',
    src: checkLogo,
  },
];

export function Benefits() {
  return (
    <>
      <h2 className={styles.benefitsSectionIntro}>Benefícios</h2>
      <div id="beneficios" className={styles.container}>
        <h1>
          A melhor forma de expandir a sua presença online e alcançar novos
          clientes <span>é com anúncios online</span>.
        </h1>

        <h1>
          <span className={styles.benefitsListHeading}>Benefícios</span> em
          contratar um gestor especializado em marketing digital :
        </h1>
        <div className={styles.benefitsList}>
          {benefitsList.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </div>

        <h1>
          <span>Você terá acesso:</span>
        </h1>

        <div className={styles.beneficiosCheckList}>
          {beneficiosCheckList.map((benefit, index) => (
            <p key={index}>
              <Image
                src={benefit.src}
                width={30}
                height={30}
                alt={benefit.alt}
              />
              {benefit.description}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
