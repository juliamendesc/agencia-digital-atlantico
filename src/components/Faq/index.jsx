import React from 'react';
import styles from 'src/components/Faq/faq.module.scss';
import CustomizedAccordions from 'src/components/ui/molecules/Accordion/Accordion';
import { accordionData } from 'src/data/accordionData';

export function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq" className={styles.container}>
      <h2>
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
    </div>
  );
}
