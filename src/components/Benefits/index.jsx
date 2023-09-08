import styles from './benefits.module.scss';
import React from 'react';
// import { Fade, Slide } from 'react-awesome-reveal';

export function Benefits() {
  return (
    <div id="beneficios" className={styles.container}>
      {/* <Slide> */}
        <h3>Benefícios</h3>
      {/* </Slide> */}

      {/* <Fade delay={1e1} cascade damping={1e-1}> */}
        <h1>
          A melhor forma de expandir a sua presença online e alcançar novos
          clientes, <span>são com anúncios online</span>.
        </h1>
      {/* </Fade> */}

      {/* <Fade delay={1e3} cascade damping={2e-1}> */}
        <ul className={styles.benefitsList}>
          <li>
            Otimização e Maximização do investimento aplicado em publicidade.
          </li>
          <li>
            Aumento de tráfego qualificado, com técnicas de direcionamento e
            segmentação.
          </li>
          <li>Análise e monitoramento contínuo de resultados.</li>
          <li>Conhecimento especializado em plataformas de anúncios.</li>
          <li>Aumento da visibilidade e reconhecimento da marca.</li>
          <li>Foco nos resultados e metas do seu negócio.</li>
        </ul>
      {/* </Fade> */}

      {/* <Slide> */}
        <h1>
          <span>Você terá acesso</span>
        </h1>
      {/* </Slide> */}
      {/* <Fade delay={1e3} cascade damping={3e-1}> */}
        <ul className={styles.list2}>
          <li>Estratégias exclusivas e personalizadas</li>
          <li>Aos nossos processos e métodos</li>
          <li>Profissionais especializados e capacitados</li>
          <li>Textos e imagens personalizadas</li>
          <li>Relatórios personalizados</li>
          <li>Relatórios mensais de resultados</li>
        </ul>
      {/* </Fade> */}
    </div>
  );
}
