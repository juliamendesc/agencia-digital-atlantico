'use client';
import styles from './cards.module.scss';

export function CardSocial() {
  return (
    <div className={styles.container}>
      <div className={styles.textSocial}>
        <h1>Serviços para a sua empresa obter resultados:</h1>
      </div>

      <section className={styles.cardsSocial}>
        <div className={styles.cardFace}>
          <div className={styles.card}>
            <h1>Facebook</h1>
            <p>
              Ao anunciar no Facebook, pode atrair novos clientes, aumentar o
              reconhecimento da marca, realizar vendas, entre outras ações.
            </p>
          </div>
        </div>

        <div className={styles.cardInsta}>
          <div className={styles.card}>
            <h1>Instagram</h1>
            <p>
              Ao anunciar no Instagram, pode atrair novos clientes, aumentar o
              reconhecimento da marca, realizar vendas, entre outras ações.
            </p>
          </div>
        </div>

        <div className={styles.cardYoutube}>
          <div className={styles.card}>
            <h1>Youtube</h1>
            <p>
              Os anúncios do YouTube permitem a seleção de pessoas por
              interesse, localidade, palavra-chave ou por conteúdo.
            </p>
          </div>
        </div>

        <div className={styles.cardGoogle}>
          <div className={styles.card}>
            <h1>Google</h1>
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
