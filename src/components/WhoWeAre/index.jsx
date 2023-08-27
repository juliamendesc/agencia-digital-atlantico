import React from "react";
import Styles from './who.module.scss'


export function Who() {
    return(
    <div id='quemsomos' className={Styles.container}>
        <h3>Quem Somos</h3>
        <h1>Digital Atlântico</h1>
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
        
        
        <div className={Styles.line}></div>
        
        <div className="container2">
        <h1>+30</h1>
        <h2>mais de 30 empresas já tiveram a nossa ajuda.                                                    
        Algumas empresas que já confiam:   
        </h2>
        <div className={Styles.logo}>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </div>
        </div>

    </div>
    )
};