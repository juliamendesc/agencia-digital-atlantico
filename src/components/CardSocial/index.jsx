'use client';
import Styles from './cards.module.scss';
export function CardSocial() {
  return (
    <div className={Styles.container}>
      <section className={Styles.cardsSocial}>
        <div className={Styles.cardFace}>
          <div className={Styles.row}>
            <div className={Styles.card}>
              <h1>Facebook</h1>
              <p>
                Ao anunciar no Facebook, pode atrair novos clientes, aumentar o
                reconhecimento da marca, realizar vendas, entre outras ações.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.cardInsta}>
          <div className={Styles.row}>
            <div className={Styles.card}>
              <h1>Instagram</h1>
              <p>
                Ao anunciar no Instagram, pode atrair novos clientes, aumentar o
                reconhecimento da marca, realizar vendas, entre outras ações.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.cardYoutube}>
          <div className={Styles.row}>
            <div className={Styles.card}>
              <h1>Youtube</h1>
              <p>
                Os anúncios do YouTube permitem a seleção de pessoas por
                interesse, localidade, palavra-chave ou por conteúdo.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.cardGoogle}>
          <div className={Styles.row}>
            <div className={Styles.card}>
              <h1>Google</h1>
              <p>
                O Google é o maior navegador do mundo, com 98% do tráfego de
                pesquisas. Anunciar através do Google é uma ferramenta ou
                estratégia usada para qualquer negócio, porém para alguns tipos
                de negócio é fundamental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
