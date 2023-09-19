import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import StepperMobile from 'src/components/ui/molecules/StepperMobile/StepperMobile';
import StepperDesktop from 'src/components/ui/molecules/StepperDesktop/StepperDesktop';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from 'src/components/ui/organisms/ContactForm.module.scss';

export default function ContactForm() {
  const mobile = useMediaQuery('(max-width:600px)');

  return (
    <Box className={styles.container}>
      <Box>
        <Typography variant="h1" fontWeight="700">
          Sessão estratégica com a Digital Atlântico
        </Typography>
      </Box>

      <Box>
        <Typography variant="h2" fontWeight={700} className={styles.typography}>
          Assim que nos enviar o formulário completo, vamos analisar as suas
          respostas para fazermos uma análise preliminar acerca do seu negócio.
        </Typography>
      </Box>

      <Chip
        label="8 perguntas - tempo médio de duração 1 minuto"
        className={styles.chip}
        variant="outlined"
      />

      <Box>{mobile ? <StepperMobile /> : <StepperDesktop />}</Box>
    </Box>
  );
}
