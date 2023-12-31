import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import StepperMobile from 'src/components/ui/molecules/StepperMobile/StepperMobile';
import StepperDesktop from 'src/components/ui/molecules/StepperDesktop/StepperDesktop';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MultistepProvider } from 'src/context/multistepContext';
import styles from 'src/components/ui/templates/MultiStepContactForm/MultiStepContactForm.module.scss';

export default function MultiStepContactForm() {
  // eslint-disable-next-line no-unused-vars
  const [formStatus, setFormStatus] = useState({
    clientName: '',
    success: false,
  });
  const [activeStep, setActiveStep] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery('(max-width:767px)');

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
        <h2 className={styles.typography}>
          Assim que nos enviar o formulário completo, vamos analisar as suas
          respostas para fazermos uma análise preliminar acerca do seu negócio.
        </h2>
      </Box>

      <div className={styles.chip}>
        8 perguntas - tempo médio de duração 1 minuto
      </div>

      <MultistepProvider>
        {isMobile ? (
          <StepperMobile
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        ) : (
          <StepperDesktop
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            setFormStatus={setFormStatus}
          />
        )}
      </MultistepProvider>
    </Box>
  );
}
