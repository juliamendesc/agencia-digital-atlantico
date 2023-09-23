import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import styles from 'src/components/ui/molecules/StepperMobile/StepperMobile.module.scss';
import { PersonalData } from '../../organisms/personal-data/personalData';

export const steps = [
  {
    label: 'Dados de contato',
    description: <PersonalData />,
  },
  { label: 'Setor de negócio', description: '' },
  { label: 'Website', description: '' },
  { label: 'Instagram', description: '' },
  { label: 'Facebook', description: '' },
  { label: 'Tamanho da empresa', description: '' },
  { label: 'Investimento em publicidade', description: '' },
  { label: 'Orçamento disponível', description: '' },
];

export default function TextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const maxSteps = steps.length;

  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === maxSteps - 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log('submit');
    setIsSubmitted(true);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }} className={styles.container}>
      <Box
        sx={{
          height: 255,
          maxWidth: 400,
          width: '100%',
          p: 2,
          background: '#000',
        }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={isLastStep ? handleSubmit : handleNext}
            disabled={isSubmitted}
          >
            {isLastStep ? 'Enviar' : 'Seguinte'}
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={isFirstStep}>
            <KeyboardArrowLeft />
            Anterior
          </Button>
        }
      />
    </Box>
  );
}
