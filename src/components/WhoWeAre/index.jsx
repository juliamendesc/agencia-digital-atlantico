'use client';
import React from 'react';
import Styles from './who.module.scss';
import Image from 'next/image';
import 'animate.css';

import CopLogo from '../../assets/copologo.jpg';
import LobLogo from '../../assets/lomboklogo.jpg';
import OrangeLogo from '../../assets/orangelogo.jpg';
import logoantlantico from '../../assets/logoatlantico.png';

export function Who() {
  return (
    <div id="quemsomos" className={Styles.container}>
      <h3>
        <span>Quem Somos</span>
      </h3>

      <div className={Styles.logoAtla}>
        <Image src={logoantlantico} width={150} height={150} />
      </div>

      <p>
        Somos uma agência de marketing especializada em{' '}
        <span>publicidade online</span>
      </p>

      <p>
        Ajudamos a otimizar a presença online do seu negócio e aumentar o
        tráfego de websites, páginas destino ou plataformas de comércio
        eletrónico.
      </p>
      
      <p>
        A nossa principal função é maximizar o retorno sobre o investimento
        feito em publicidade.
      </p>

      <div className={Styles.line}></div>

      <div className={Styles.container2}>
        <h1>+30</h1>
        <h2>
          mais de 30 empresas já tiveram a nossa ajuda.
        </h2>

        <h2><span>Algumas empresas que já
          confiam</span> :</h2>

        <div className={Styles.logo}>
          <a href="#">
            <span>Copportunity</span>
            <Image src={CopLogo} width={200} height={200} />
          </a>
          <a href="#">
            <span>Lombok</span>
            <Image src={LobLogo} width={200} height={200} />
          </a>
          <a href="#">
            <span>Orange Store</span>
            <Image src={OrangeLogo} width={200} height={200} />
          </a>
        </div>
      </div>
    </div>
  );
}
