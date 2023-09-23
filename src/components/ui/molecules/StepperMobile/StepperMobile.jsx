import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import PersonalData from 'src/components/ui/organisms/personal-data/personalData';
import BusinessArea from 'src/components/ui/organisms/business-area/businessArea';
import Facebook from 'src/components/ui/organisms/facebook/facebook';
import Instagram from 'src/components/ui/organisms/instagram/instagram';
import Website from 'src/components/ui/organisms/website/website';
import BusinessSize from 'src/components/ui/organisms/business-size/businessSize';
import HasHiredPaidAds from 'src/components/ui/organisms/has-hired-paid-ads/hasHiredPaidAds';
import Budget from 'src/components/ui/organisms/budget/budget';
import styles from 'src/components/ui/molecules/StepperMobile/StepperMobile.module.scss';

export const steps = [
  {
    label: 'Dados de contato',
    description: <PersonalData />,
  },
  { label: 'Setor de negócio', description: <BusinessArea /> },
  { label: 'Website', description: <Website /> },
  { label: 'Instagram', description: <Instagram /> },
  { label: 'Facebook', description: <Facebook /> },
  { label: 'Tamanho da empresa', description: <BusinessSize /> },
  { label: 'Investimento em publicidade', description: <HasHiredPaidAds /> },
  { label: 'Orçamento disponível', description: <Budget /> },
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
