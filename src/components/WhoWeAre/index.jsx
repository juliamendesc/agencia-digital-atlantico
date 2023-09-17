'use client';

import React from 'react';
import Image from 'next/image';
import Logoatla4 from '../../assets/logoatla4.png';
import LightLogo from '../../assets/lightLogo.png';
import CopLogo from '../../assets/CopLogo.png';
import LobLogo from '../../assets/LobLogo.png';
import OrangeLogo from '../../assets/orangeLogo_light.png';

import styles from './who.module.scss';
import 'animate.css';

export function WhoWeAre() {
  return (
    <div id="quemsomos">
      <h2 className={styles.heading}>Quem Somos</h2>

      <div className={styles.container}>
        <div className={styles.logoAtla}>
          <Image src={Logoatla4} alt="logo-digital-atlantico" />
        </div>

        <p>
          Somos uma agência de marketing especializada em
          <span> publicidade online</span>.
        </p>

        <p>
          Ajudamos a otimizar a presença online do seu negócio e aumentar o
          tráfego de websites, páginas destino ou plataformas de comércio
          eletrónico.
        </p>

        <p>
          A nossa principal função é maximizar o retorno sobre o investimento
          feito em publicidade, através de métricas importantes, como taxa de
          cliques
          <span> (CTR)</span>, taxa de conversão, custo por aquisição
          <span> (CPA)</span> e retorno sobre o investimento <span>(ROI)</span>.
        </p>

        <div className={styles.line}></div>

        <h1>
          <span>+30:</span> mais de 30 empresas já tiveram a nossa ajuda.
        </h1>
        <p>Algumas empresas que já confiam:</p>

        <div className={styles.logo}>
          <div>
            <p>Copportunity</p>
            <Image src={CopLogo} alt="cop-logo" />
          </div>
          <div>
            <p>Lights & bottles</p>
            <Image src={LightLogo} alt="light-logo" />
          </div>
          <div>
            <p>Lombok</p>
            <Image src={LobLogo} alt="lob-logo" />
          </div>
          <div>
            <p>Orange Store</p>
            <Image src={OrangeLogo} alt="orange-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
