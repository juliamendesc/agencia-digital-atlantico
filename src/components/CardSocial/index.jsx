'use client'
import Styles from './cards.module.scss';
import Image from 'next/image';
import Facebook from '../../assets/facebook5.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';
import Google from '../../assets/google.png';

export function CardSocial() {
    return(
    <div className={Styles.container}>
        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Facebook}
                        width={70}
                        height={70}
                        className={`${Styles.fa} ${Styles.i}`}
                        alt="Facebook Icon"/>
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
                </div>
            </div>
        </div>
        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Instagram} 
                        width={70}
                        height={70}
                        className={`${Styles.fa} ${Styles.i}`}
                        alt="Instagram Icon"/>
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
                    
                </div>
            </div>
        </div>
        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Youtube} 
                        width={70}
                        height={70}
                        className={`${Styles.fa} ${Styles.i}`}
                        alt="Youtube Icon"
                        />
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
                    
                </div>
            </div>
        </div>

        <div className={Styles.card}>
            <div className={`${Styles.face} ${Styles.face1}`}>
                <div className={Styles.content}>
                    <div className={Styles.icon}>
                        <Image src={Google}
                        width={70}
                        height={70}
                        className={`${Styles.fa} ${Styles.i}`}
                        alt="Google Icon" />
                    </div>
                </div>
            </div>
            <div className={`${Styles.face} ${Styles.face2}`}>
                <div className={Styles.content}>
                    <h4>
                    O Google é o maior navegador do mundo,
                    com 98% do tráfego de pesquisas. 
                    Anunciar através do Google é uma ferramenta
                    ou estratégia usada para qualquer negócio, 
                    porém para alguns tipos de negócio é fundamental.
                    </h4>
                </div>
            </div>
        </div>
    </div>


); 
}