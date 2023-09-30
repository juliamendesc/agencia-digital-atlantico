import React from 'react';
import Image from 'next/image';
import Quemsomos from 'src/assets/quemsomos.jpg';
import LightLogo from 'src/assets/lightLogo.png';
import CopLogo from 'src/assets/CopLogo.png';
import LobLogo from 'src/assets/LobLogo.png';
import OrangeLogo from 'src/assets/orangeLogo_light.png';

import styles from './who.module.scss';
import 'animate.css';

export function WhoWeAre() {
  return (
    <div id="quemsomos" className={styles.quemSomosWrapper}>
      <h2 className={styles.heading}>Quem Somos</h2>

      <div className={styles.container}>
        <h1>
          Somos uma agência de marketing especializada em
          <span> publicidade online</span>.
        </h1>
        <div className={styles.sectionWrapper}>
          <div className={styles.paragraphs}>
            <p>
              Ajudamos a otimizar a presença online do seu negócio e aumentar o
              tráfego de websites, páginas destino ou plataformas de comércio
              eletrónico.
            </p>

            <p>
              A nossa principal função é maximizar o retorno sobre o
              investimento feito em publicidade. Através de métricas
              importantes, como taxa de cliques
              <span> (CTR)</span>, taxa de conversão, custo por aquisição
              <span> (CPA)</span> e retorno sobre o investimento{' '}
              <span>(ROI)</span>.
            </p>
          </div>

          <div className={styles.logoAtla}>
            <Image src={Quemsomos} alt="logo-digital-atlantico" />
          </div>
        </div>

        <div className={styles.line}></div>

        <h1>
          <span>+30:</span>
        </h1>
        <p>
          mais de 30 empresas já tiveram a nossa <span>ajuda.</span>
        </p>
        <p>Algumas empresas que já confiam:</p>

        <div className={styles.logo}>
          <div>
            <p>Lights & bottles</p>
            <Image src={LightLogo} alt="light-logo" />
          </div>
          <div>
            <p>Copportunity</p>
            <Image src={CopLogo} alt="cop-logo" />
          </div>
          <div>
            <p>Lombok</p>
            <Image src={LobLogo} alt="lob-logo" />
          </div>
          <div>
            <p>OrangeStore</p>
            <Image src={OrangeLogo} alt="orange-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
