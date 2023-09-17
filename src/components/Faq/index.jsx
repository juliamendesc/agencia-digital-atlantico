'use client';
import React from 'react';
import styles from './faq.module.scss';
import CustomizedAccordions from '../ui/Accordion';
import { accordionData } from '../../data/accordionData';
import { Accordion, AccordionItem } from '@nextui-org/react';

export function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.container}>
      <h2 id="faq">
        <span>Perguntas Frequentes</span>
      </h2>

      <div className={styles.accordionWrapper}>
        {accordionData.map((item) => (
          <CustomizedAccordions
            defaultContent={item}
            key={item.key}
            expanded={expanded === item.key}
            onChange={handleChange(item.key)}
          />
        ))}
      </div>

      {/* <Accordion variant="splitted" className={styles.accordion}>
        <AccordionItem
          className={styles.accordionItem}
          key="1"
          aria-label="O que é publicidade online ou tráfego pago ?"
          title="O que é publicidade online ou tráfego pago ?"
        >
          <p>
            'Publicidade online, também conhecida como tráfego pago, refere-se
            às estratégias e técnicas de marketing que envolvem o pagamento para
            exibir anúncios e direcionar tráfego para websites, plataformas de
            comércio eletrônico ou outras propriedades online. É uma forma de
            publicidade digital na qual os anunciantes pagam por espaço
            publicitário ou por interações com seus anúncios, como cliques,
            visualizações ou conversões.''
          </p>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          className={styles.accordionItem}
          title="É possível ter consultoria em vez de contratos de gestão de marketing?"
        >
          <p>Sim, é possível. Entre em contato conosco.</p>
        </AccordionItem>

        <AccordionItem
          className={styles.accordionItem}
          key="3"
          aria-label="Accordion 3"
          title="O que são métricas e para que servem ?"
        >
          <p>
            As métricas de tráfego pago são indicadores que fornecem insights
            sobre o desempenho das campanhas de publicidade online e o tráfego
            gerado a partir dessas campanhas. Elas ajudam a avaliar a eficácia
            de suas estratégias de marketing e tomar decisões informadas para
            otimizar seus investimentos em publicidade. O acompanhamento e a
            análise contínuos dessas métricas ajudam a entender o desempenho da
            publicidade e a tomar decisões estratégicas para otimizar os
            resultados.
          </p>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          className={styles.accordionItem}
          title="Qual é o tempo mínimo para podermos ver resultados ?"
        >
          <p>Em 3 meses, já será possível ver alguns resultados.</p>
        </AccordionItem>

        <AccordionItem
          key="5"
          className={styles.accordionItem}
          aria-label="Accordion 5"
          title="Devo anunciar através do Facebook/Instagram Ads ou do Google Ads ?"
        >
          <p>
            Dependendo do objetivo e do tipo de negócio, é possível anunciar em
            ambas, porém têm objetivos diferentes e benefícios diferentes. Essa
            questão é algo analisado e estudado pela nossa agência quando
            assumimos o controlo da gestão de marketing do seu negócio.
          </p>
        </AccordionItem>

        <AccordionItem
          key="6"
          aria-label="Accordion 6"
          className={styles.accordionItem}
          title="As plataformas de publicidade existentes, funcionam mesmo ?"
        >
          <p>
            Costumamos dizer que se não funcionasse, nós (Agência Digital
            Atlântico) não existiríamos. Assim como milhares de negócios e
            empresas que utilizam com sucesso, diariamente esta ferramenta muito
            poderosa.{' '}
          </p>
        </AccordionItem>

        <AccordionItem
          key="7"
          aria-label="Accordion 7"
          className={styles.accordionItem}
          title="É possível anunciar o meu negócio sozinho/a ?"
        >
          <p>
            Claro que sim, é sempre possível. Será sempre necessário várias
            horas de estudo e compreensão do que queremos fazer ou ferramentas
            que queremos usar, mas com dedicação tudo é possível. Contudo é
            importante não esquecer que a nossa empresa existe por termos
            profissionais qualificados com conhecimento e ferramentas que nos
            permitem executar a gestão de anúncios de forma extremamente
            profissional, assim como análise dos mesmos. Resumidamente tudo
            depende do que queremos, podemos realizar ações de marketing mais
            simples ou mais complexas, mais amadoras ou mais profissionais, etc.
          </p>
        </AccordionItem>

        <AccordionItem
          key="8"
          className={styles.accordionItem}
          aria-label="Accordion 8"
          title="Qual valor mínimo de investimento??"
        >
          <p>
            O valor mínimo de investimento é de 6 Euros, 20 Reais, 7 dólares,
            por dia
          </p>
        </AccordionItem>
        <AccordionItem
          key="9"
          className={styles.accordionItem}
          aria-label="Accordion 9"
          title="Quais são os períodos de contrato possíveis com a agência ?"
        >
          <p>Podemos acordar contratos de 3, 6 ou 12 meses.</p>
        </AccordionItem>

        <AccordionItem
          key="10"
          className={styles.accordionItem}
          aria-label="Accordion 10"
          title="Quantas métricas existem e quais ?"
        >
          <p>Algumas métricas comuns de tráfego pago:</p>
          <p>
            Impressões: O número de vezes que um anúncio foi exibido para os
            usuários. Essa métrica indica a visibilidade e alcance do anúncio.
          </p>
          <p>
            Cliques: O número de vezes que os usuários clicaram no anúncio para
            visitar o website ou plataforma anunciada. Esse indicador mostra o
            engajamento inicial dos usuários.
          </p>
          <p>
            Taxa de Cliques (CTR): A proporção entre o número de cliques e o
            número de impressões do anúncio, expressa em porcentagem. Essa
            métrica ajuda a avaliar a atratividade do anúncio e a relevância
            para o público-alvo.
          </p>
          <p>
            Taxa de Conversão: A proporção entre o número de conversões e o
            número de cliques no anúncio. Uma conversão pode ser definida de
            acordo com o objetivo da campanha, como uma venda, preenchimento de
            formulário, assinatura de newsletter, entre outros. Essa métrica
            mostra o sucesso em transformar o tráfego em ações desejadas.
          </p>
          <p>
            Custo por Clique (CPC): O custo médio para cada clique recebido no
            anúncio. Essa métrica ajuda a avaliar o custo-benefício da campanha
            e a comparar diferentes canais ou anúncios.
          </p>
          <p>
            Custo por Aquisição (CPA): O custo médio para adquirir uma
            conversão. Essa métrica é especialmente relevante para campanhas com
            foco em vendas ou geração de leads. Ela ajuda a avaliar o retorno
            sobre o investimento e a eficiência da campanha em gerar resultados
          </p>
          <p>
            Retorno sobre o Investimento (ROI): A relação entre o lucro obtido e
            o investimento em publicidade. Essa métrica é crucial para
            determinar se a campanha está gerando um retorno positivo ou
            negativo em relação aos recursos investidos.
          </p>
        </AccordionItem>

        <AccordionItem
          key="11"
          className={styles.accordionItem}
          aria-label="Accordion 11"
          title="Que tipos de formas existem, de publicidade online ou tráfego pago ?"
        >
          <p>
            Anúncios de Pesquisa: São os anúncios exibidos nos mecanismos de
            busca, como o Google, quando os usuários realizam uma pesquisa
            relacionada a determinadas palavras-chave. Esses anúncios são
            exibidos no topo ou na parte inferior da página de resultados de
            pesquisa e geralmente têm um formato textual.
          </p>

          <p>
            Anúncios de Display: São anúncios visuais exibidos em sites, blogs,
            aplicativos móveis e em redes de anúncios. Eles podem ter formatos
            de imagem, gráficos, animações ou até mesmo vídeos. Os anunciantes
            podem segmentar o público-alvo com base em características
            demográficas, interesses ou comportamentos de navegação.
          </p>

          <p>
            Anúncios em Redes Sociais: São anúncios exibidos em plataformas de
            mídia social, como Facebook, Instagram, Twitter, LinkedIn e outras.
            Esses anúncios podem incluir imagens, vídeos ou carrosséis e podem
            ser segmentados com base em dados demográficos, interesses,
            comportamentos e conexões sociais dos usuários.
          </p>

          <p>
            Anúncios em Vídeo: São anúncios em formato de vídeo exibidos em
            plataformas como o YouTube e outras redes de vídeo. Os anúncios
            podem ser exibidos antes, durante ou após vídeos selecionados e
            podem ser segmentados com base em interesses, idade, localização e
            outros dados demográficos.
          </p>

          <p>
            Anúncios de Remarketing: São anúncios exibidos para usuários que já
            visitaram um website específico. Esses anúncios são direcionados aos
            usuários que demonstraram interesse anteriormente, com o objetivo de
            reconectar, engajar e converter esses visitantes em clientes.
          </p>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}
