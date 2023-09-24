import { Box, InputLabel, OutlinedInput, useMediaQuery } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './BusinessArea.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';

export default function BusinessArea({ activeStep, setActiveStep }) {
  const multiStepContext = useMultistepContext();
  const methods = useFormContext();
  const mobile = useMediaQuery('(max-width:767px)');

  function onSubmit(data) {
    console.log('data', data);
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  function handleNext() {
    onSubmit(methods.getValues());
    setActiveStep(activeStep + 1);
  }

  function handleBack() {
    onSubmit(methods.getValues());
    setActiveStep(activeStep - 1);
  }

  console.log('state', multiStepContext);
  console.log('values', methods.getValues());
  console.log('erros', methods.formState.errors);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Box className={styles.container}>
        <Box className={styles.wrapper}>
          <InputLabel htmlFor="business-area">
            Qual é o seu setor de negócio?
            <sup>*</sup>
          </InputLabel>
          <Box className={styles.input}>
            <OutlinedInput
              id="business-area"
              {...methods.register('businessArea')}
            />
            {methods.formState.errors.businessArea && (
              <span className={styles.error}>
                {methods.formState.errors.businessArea.message}
              </span>
            )}
          </Box>
        </Box>
      </Box>
      {!mobile && (
        <SubmitButton
          activeStep={1}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          text="Próximo"
        />
      )}
    </form>
  );
}

BusinessArea.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
