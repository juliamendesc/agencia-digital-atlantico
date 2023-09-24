import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import StepperMobile from 'src/components/ui/molecules/StepperMobile/StepperMobile';
import StepperDesktop from 'src/components/ui/molecules/StepperDesktop/StepperDesktop';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MultistepProvider } from 'src/context/multistepContext';
import styles from 'src/components/ui/templates/MultiStepContactForm/MultiStepContactForm.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { multistepFormSchema } from 'src/Schema/multistep-form/multistepForm';

export default function MultiStepContactForm() {
  const [activeStep, setActiveStep] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    resolver: zodResolver(multistepFormSchema),
    mode: 'onBlur',
  });

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

      <MultistepProvider>
        <FormProvider {...methods}>
          {isMobile ? (
            <StepperMobile
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          ) : (
            <StepperDesktop
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          )}
        </FormProvider>
      </MultistepProvider>
    </Box>
  );
}
