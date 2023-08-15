'use client'
import Styles from './cards.module.scss';
import Image from 'next/image';
import Facebook from '../../assets/facebook5.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';
import Google from '../../assets/google.png';
export function CardSocial() {
    return(
        <body className={Styles.body}>
    <div className={Styles.container}>
        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Facebook} width={70}  id={Styles.i} className={Styles.fa} aria-hidden="true"/>
                    </div>
                </div>
            </div>
            <div className={`${Styles.face} ${Styles.face2}`}>
                <div className={Styles.content}>
                    <h3>
                    Ao anunciar no Facebook,
                    pode atrair novos clientes,
                    aumentar o reconhecimento da marca,
                    realizar vendas, entre outras ações.

                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>
        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Instagram} width={70}   id={Styles.i} className={Styles.fa} aria-hidden="true"/>
                    </div>
                </div>
            </div>
            <div className={`${Styles.face} ${Styles.face2}`}>
                <div className={Styles.content}>
                    <h3>
                    Ao anunciar no Instagram,
                    pode atrair novos clientes,
                    aumentar o reconhecimento da marca,
                    realizar vendas, entre outras ações.

                    </h3>
                    <p>This is where I read news and network with different social groups.</p>
                </div>
            </div>
        </div>
        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Youtube} width={70}  id={Styles.i} className={Styles.fa} aria-hidden="true"/>
                    </div>
                </div>
            </div>
            <div className={`${Styles.face} ${Styles.face2}`}>
                <div className={Styles.content}>
                    <h3>
                    Os anúncios do YouTube permitem a seleção
                    de pessoas por interesse, localidade, 
                    palavra-chave ou por conteúdo.
                    </h3>
                    <p>This is where I share code and work on projects.</p>
                </div>
            </div>
        </div>

        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Google} width={70}  id={Styles.i} className={Styles.fa} aria-hidden="true"/>
                    </div>
                </div>
            </div>
            <div className={`${Styles.face} ${Styles.face2}`}>
                <div className={Styles.content}>
                    <h3>
                    O Google é o maior navegador do mundo,
                    com 98% do tráfego de pesquisas. 
                    Anunciar através do Google é uma ferramenta
                    ou estratégia usada para qualquer negócio, 
                    porém para alguns tipos de negócio é fundamental.
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>
    </div>
</body>

    // <div className={Styles.container}>
       
    //      <h1>Serviços para a sua empresa obter resultados:</h1>

    //     <div className={Styles.card1}>
    //         {/* link aqui */}
    //         <h1>Facebook </h1>
    //         <p className={Styles.title}>Ao anunciar no Facebook,
    //             pode atrair novos clientes,
    //             aumentar o reconhecimento da marca,
    //             realizar vendas, entre outras ações.
    //         </p>
    //     </div>

    //     <div className={Styles.card2}>
    //         {/* Link aqui */}
    //         <h1>Instagram</h1>
    //         <p>
    //             Ao anunciar no Instagram,
    //             pode atrair novos clientes,
    //             aumentar o reconhecimento da marca,
    //             realizar vendas, entre outras ações.
    //         </p>
    //     </div>

    //     <div className={Styles.card3}>
    //         {/* Link aqui */}
    //         <h1>Youtube</h1>
    //         <p>
    //         Os anúncios do YouTube permitem a seleção
    //         de pessoas por interesse, localidade, 
    //         palavra-chave ou por conteúdo. 
    //         </p>
    //     </div>

    //     <div className={Styles.card4}>
    //         {/* Link aqui */}
    //         <h1>Google</h1>
    //         <p>
    //         O Google é o maior navegador do mundo,
    //         com 98% do tráfego de pesquisas. 
    //         Anunciar através do Google é uma ferramenta
    //         ou estratégia usada para qualquer negócio, 
    //         porém para alguns tipos de negócio é fundamental.
    //         </p>
    //     </div>
    // </div>
); 
}