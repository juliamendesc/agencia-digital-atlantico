import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import StepperMobile from 'src/components/ui/molecules/StepperMobile/StepperMobile';
import StepperDesktop from 'src/components/ui/molecules/StepperDesktop/StepperDesktop';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from 'src/components/ui/templates/MultiStepContactForm/MultiStepContactForm.module.scss';

export default function MultiStepContactForm() {
  const [isMobile, setIsMobile] = React.useState(false);
  const mobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

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

      <div className={styles.chip}>
        8 perguntas - tempo médio de duração 1 minuto
      </div>

      {isMobile ? <StepperMobile /> : <StepperDesktop />}
    </Box>
  );
}
