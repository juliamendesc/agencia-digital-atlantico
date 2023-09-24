import {
  Box,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './BusinessSize.module.scss';
import PropTypes from 'prop-types';
import SubmitButton from 'src/components/ui/atoms/Submit-button';

export default function BusinessSize({ activeStep, setActiveStep }) {
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
          <InputLabel htmlFor="business-size">
            Quantas pessoas trabalham na sua empresa?
            <sup>*</sup>
          </InputLabel>
          <Box className={styles.input}>
            <Controller
              name="businessSize.businessSize"
              control={methods.control}
              render={({ field }) => (
                <>
                  <ToggleButtonGroup
                    id="business-size"
                    exclusive
                    sx={{
                      '.MuiButtonBase-root': {
                        padding: '0.5rem 1rem',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',

                        margin: '0 auto',
                      },
                    }}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  >
                    <ToggleButton value="1-3">1-3</ToggleButton>
                    <ToggleButton value="4-10">4-10</ToggleButton>
                    <ToggleButton value="11-20">11-20</ToggleButton>
                    <ToggleButton value="21-50">21-50</ToggleButton>
                  </ToggleButtonGroup>

                  {methods.formState.errors.businessSize?.businessSize && (
                    <p className={styles.error}>
                      {
                        methods.formState.errors.businessSize?.businessSize
                          ?.message
                      }
                    </p>
                  )}
                </>
              )}
            />
          </Box>
        </Box>
      </Box>
      {!mobile && (
        <SubmitButton
          activeStep={5}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          text="Próximo"
        />
      )}
    </form>
  );
}

BusinessSize.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
