'use client';
import React from 'react';
import styles from './faq.module.scss';
import CustomizedAccordions from '../ui/Accordion';
import { accordionData } from '../../data/accordionData';

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
    </div>
  );
}
