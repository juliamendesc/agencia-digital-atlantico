'use client'
import React from "react";
import Styles from './who.module.scss'
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import 'animate.css';

import LightLogo from '../../assets/LightLogo.png';
import CopLogo from '../../assets/CopLogo.png';
import LobLogo from '../../assets/LobLogo.png';
import OrangeLogo from '../../assets/OrangeLogo.png';
import logoantlantico from '../../assets/logoatlantico.png'

export function Who() {
    return(
    <div id='quemsomos' className={Styles.container}>
        <Slide>
        <h3><span>Quem Somos</span></h3>
        </Slide>

        <Fade delay={1e3} cascade damping={1e-1}>
        <h1>Digital Atlântico</h1>
        <div className={Styles.logoAtla}>
        <Image src={logoantlantico} width={300}/>
        </div>
       

        
        <p>
        Somos uma agência de marketing especializada
        em <span>publicidade online</span>
        </p>
        
        <p>
        Ajudamos a otimizar a presença online
        do seu negócio e aumentar o tráfego de websites,
        páginas destino ou plataformas de comércio eletrónico.
        </p>

        <p>
        A nossa principal função é maximizar o retorno 
        sobre o investimento feito em publicidade.
        </p>

        <div className={Styles.lineBreak}>
        <p>
        Através de métricas importantes, como taxa de cliques <span>(CTR)</span>
        </p>

        <p>
        taxa de conversão, custo por aquisição <span>(CPA)</span> 
        </p>

        <p>
        retorno sobre o investimento <span>(ROI)</span>
        </p>
        </div>
        </Fade>
        
        <div className={Styles.line}></div>
        
        <div className="container2">
        <h1>+30</h1>
        <h2>mais de 30 empresas já tiveram a nossa ajuda.                                                    
        Algumas empresas que já confiam:   
        </h2>

        <div className={Styles.logo}>
            <a href="#">
                <span>Copportunity</span>
                <Image src={CopLogo} width={200}/>
            </a>
            <a href="#">
                <span>Lights & bottles</span>
                <Image src={LightLogo} width={205} height={200}/>
            </a>
            <a href="#">
                <span>Lombok</span>
                <Image src={LobLogo} width={200}/>
            </a>
            <a href="#">
                <span>Orange Store</span>
                <Image src={OrangeLogo} width={200}/>
            </a>
        </div>
        </div>

    </div>
    )
};