import React from 'react';
import { Card } from '@mui/material';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from 'src/components/ui/organisms/submitted-form/SubmittedForm.module.scss';

export default function SubmittedForm() {
  const multiStepContext = useMultistepContext();

  console.log(multiStepContext);

  return (
    <Card
      className={styles.container}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        height: '25rem',
      }}
    >
      <h1>
        {`Muito obrigado ${
          multiStepContext.state.personalData?.nome &&
          `, ${multiStepContext.state.personalData?.nome} `
        }!`}
      </h1>
      <p>Vamos analisar o seu negócio e em breve entraremos em contacto.</p>
    </Card>
  );
}
