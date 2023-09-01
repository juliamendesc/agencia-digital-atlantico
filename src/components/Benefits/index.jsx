import styles from './benefits.module.scss';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

export function Benefits() {
  return (
    <div id="beneficios" className={styles.container}>
      <Slide>
        <h3>Benefícios</h3>
      </Slide>

      <Fade delay={1e1} cascade damping={1e-1}>
        <h1>
          A melhor forma de expandir a sua presença online e alcançar novos
          clientes, <span>são com anúncios online</span>.
        </h1>
      </Fade>

      <Fade delay={1e3} cascade damping={2e-1}>
        <div className={styles.benefitsList}>
          <p>
            Otimização e Maximização do investimento aplicado em publicidade.
          </p>
          <p>
            Aumento de tráfego qualificado, com técnicas de direcionamento e
            segmentação.
          </p>
          <p>Análise e monitoramento contínuo de resultados.</p>
          <p>Conhecimento especializado em plataformas de anúncios.</p>
          <p>Aumento da visibilidade e reconhecimento da marca.</p>
          <p>Foco nos resultados e metas do seu negócio.</p>
        </div>
      </Fade>

      <Slide>
        <h1>
          <span>Você terá acesso</span>
        </h1>
      </Slide>
      <Fade delay={1e3} cascade damping={3e-1}>
        <div className={styles.list2}>
          <p>Estratégias exclusivas e personalizadas</p>
          <p>Aos nossos processos e métodos</p>
          <p>Profissionais especializados e capacitados</p>
          <p>Textos e imagens personalizadas</p>
          <p>Relatórios personalizados</p>
          <p>Relatórios mensais de resultados</p>
        </div>
      </Fade>
    </div>
  );
}
