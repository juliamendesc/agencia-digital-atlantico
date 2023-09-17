import React from 'react';
import styles from './faq.module.scss';
import CustomizedAccordions from '@/components/ui/Accordion';
import { accordionData } from '@/data/accordionData';

export function Faq() {
  return (
    <div className={styles.container}>
      <h2 id="faq">
        <span>Perguntas Frequentes</span>
      </h2>

      {accordionData.map((item) => (
        <CustomizedAccordions defaultContent={item} />
      ))}
    </div>
  );
}
