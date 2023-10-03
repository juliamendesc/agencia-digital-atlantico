import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import styles from 'src/components/ui/molecules/StepperDesktop/StepperDesktop.module.scss';
import { useMediaQuery } from '@mui/material';
import PersonalData from 'src/components/ui/organisms/personal-data/personalData';
import BusinessArea from 'src/components/ui/organisms/business-area/businessArea';
import Website from 'src/components/ui/organisms/website/website';
import Facebook from 'src/components/ui/organisms/facebook/facebook';
import Instagram from 'src/components/ui//organisms/instagram/instagram';
import BusinessSize from 'src/components/ui/organisms/business-size/businessSize';
import HasHiredPaidAds from 'src/components/ui/organisms/has-hired-paid-ads/hasHiredPaidAds';
import Budget from 'src/components/ui/organisms/budget/budget';
import PropTypes from 'prop-types';

export const formSteps = [
  'Dados de contato',
  'Setor de negócio',
  'Website',
  'Instagram',
  'Facebook',
  'Tamanho da empresa',
  'Investimento em publicidade',
  'Orçamento disponível',
];

export default function StepperDesktop({
  activeStep = 0,
  setActiveStep = () => {},
}) {
  const verticalStepper = useMediaQuery('(max-width:765px)');
  const [isFormDirty, setIsFormDirty] = React.useState(true);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }} className={styles.container}>
      <Box sx={{ width: '100%', flexGrow: 1 }} className={styles.formContainer}>
        <Stepper
          activeStep={activeStep}
          orientation={verticalStepper ? 'vertical' : 'horizontal'}
          className={styles.stepper}
        >
          {formSteps.map((label, index) => {
            return (
              <Step key={label} className={styles.step}>
                <StepButton
                  color="var(--color-footer)"
                  onClick={handleStep(index)}
                  className={styles.stepButton}
                />
              </Step>
            );
          })}
        </Stepper>

        <Box
          sx={{ width: '100%', flexGrow: 1 }}
          className={styles.componentContainer}
        >
          {activeStep === 0 && (
            <PersonalData
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              isFormDirty={isFormDirty}
              setIsFormDirty={setIsFormDirty}
            />
          )}
          {activeStep === 1 && (
            <BusinessArea
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          )}
          {activeStep === 2 && (
            <Website activeStep={activeStep} setActiveStep={setActiveStep} />
          )}
          {activeStep === 3 && (
            <Instagram activeStep={activeStep} setActiveStep={setActiveStep} />
          )}
          {activeStep === 4 && (
            <Facebook activeStep={activeStep} setActiveStep={setActiveStep} />
          )}
          {activeStep === 5 && (
            <BusinessSize
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          )}
          {activeStep === 6 && (
            <HasHiredPaidAds
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          )}
          {activeStep === 7 && (
            <Budget activeStep={activeStep} setActiveStep={setActiveStep} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

StepperDesktop.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};
