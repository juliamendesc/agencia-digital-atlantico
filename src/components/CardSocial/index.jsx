import React from 'react';
import Image from 'next/image';
import Facebook from 'src/assets/facebook.png';
import Instagram from 'src/assets/instagram.png';
import Youtube from 'src/assets/youtube.png';
import Google from 'src/assets/google.png';
import styles from 'src/components/CardSocial/cards.module.scss';

export function CardSocial() {
  return (
    <div className={styles.container}>
      <div className={styles.textSocial}>
        <h1>Serviços para a sua empresa obter resultados:</h1>
      </div>

      <section className={styles.cardsSocial}>
        <div className={styles.cardFace}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={Facebook}
                className={styles.image}
                alt="Facebook Icon"
              />
            </div>

            <p>
              Ao anunciar no Facebook, pode atrair novos clientes, aumentar o
              reconhecimento da marca, realizar vendas, entre outras ações.
            </p>
          </div>
        </div>

        <div className={styles.cardInsta}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={Instagram}
                className={styles.image}
                alt="Instagram Icon"
              />
            </div>
            <p>
              Ao anunciar no Instagram, pode atrair novos clientes, aumentar o
              reconhecimento da marca, realizar vendas, entre outras ações.
            </p>
          </div>
        </div>

        <div className={styles.cardYoutube}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={Youtube}
                className={styles.imageExtended}
                alt="Youtube Icon"
              />
            </div>
            <p>
              Os anúncios do YouTube permitem a seleção de pessoas por
              interesse, localidade, palavra-chave ou por conteúdo.
            </p>
          </div>
        </div>

        <div className={styles.cardGoogle}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={Google}
                className={styles.imageExtended}
                alt="Google Icon"
              />
            </div>
            <p>
              O Google é o maior navegador do mundo, com 98% do tráfego de
              pesquisas. Anunciar através do Google é uma ferramenta ou
              estratégia usada para qualquer negócio, porém para alguns tipos de
              negócio é fundamental.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
