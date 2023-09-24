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
import styles from './HasHiredPaidAds.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';

export default function HasHiredPaidAds({ activeStep, setActiveStep }) {
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
          <InputLabel htmlFor="hasHiredPaidAds">
            Já alguma vez investiu em publicidade paga?
            <sup>*</sup>
          </InputLabel>

          <Box className={styles.input}>
            <Controller
              name="hasHiredPaidAds.hasHiredPaidAds"
              control={methods.control}
              render={({ field }) => (
                <>
                  <ToggleButtonGroup
                    exclusive
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  >
                    <ToggleButton
                      sx={{
                        '&.Mui-selected': {
                          backgroundColor: '#F2F2F2',
                          color: '#000000',
                        },
                        fontSize: '1.5rem',
                      }}
                      value={'Sim'}
                    >
                      Sim
                    </ToggleButton>
                    <ToggleButton
                      sx={{
                        '&.Mui-selected': {
                          backgroundColor: '#F2F2F2',
                          color: '#000000',
                        },
                        fontSize: '1.5rem',
                      }}
                      value={'Não'}
                    >
                      Não
                    </ToggleButton>
                  </ToggleButtonGroup>

                  {methods.formState.errors.hasHiredPaidAds
                    ?.hasHiredPaidAds && (
                    <p className={styles.error}>
                      {
                        methods.formState.errors.hasHiredPaidAds
                          ?.hasHiredPaidAds?.message
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
          activeStep={6}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          text="Próximo"
        />
      )}
    </form>
  );
}

HasHiredPaidAds.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
