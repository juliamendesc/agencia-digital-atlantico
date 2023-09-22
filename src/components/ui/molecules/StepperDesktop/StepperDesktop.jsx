import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from 'src/components/ui/molecules/StepperDesktop/StepperDesktop.module.scss';
import { useMediaQuery } from '@mui/material';
import { PersonalData } from 'src/components/ui/organisms/personalData/personalData';

const formSteps = [
  'Dados de contato',
  'Setor de negócio',
  'Website',
  'Instagram',
  'Facebook',
  'Tamanho da empresa',
  'Investimento em publicidade',
  'Orçamento disponível',
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const verticalStepper = useMediaQuery('(max-width:1300px)');

  const totalSteps = () => {
    return formSteps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          formSteps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const isStepFailed = (step) => {
    //validação do step todo isValid && isTouched
    return step === 1;
  };

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }} className={styles.container}>
      <Stepper
        activeStep={activeStep}
        orientation={verticalStepper ? 'vertical' : 'horizontal'}
      >
        {formSteps.map((label, index) => {
          const labelProps = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error" fontSize={14}>
                {/* {methods.formState.errors?.steps[index]?.message} */} Erro
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step
              key={label}
              completed={completed[index]}
              className={styles.step}
            >
              <StepButton
                color="var(--color-footer)"
                onClick={handleStep(index)}
                className={styles.stepButton}
              >
                <Typography
                  variant="caption"
                  color="var(--color-text-dark)"
                  fontSize={14}
                >
                  {label}
                </Typography>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ width: '100%', flexGrow: 1 }} className={styles.container}>
        <PersonalData />
      </Box>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Muito obrigado pela sua participação.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reiniciar</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
              className={styles.stepperButtons}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: 'var(--color-footer)' }}
              >
                Anterior
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }} type="submit">
                Seguinte
              </Button>
              {activeStep !== formSteps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'inline-block',
                      color: 'var(--color-tertiary)',
                    }}
                  >
                    Passo {activeStep + 1} já foi completado.
                  </Typography>
                ) : (
                  <Button onClick={handleComplete} type="submit">
                    {completedSteps() === totalSteps() - 1
                      ? 'Enviar'
                      : 'Completar Passo'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
