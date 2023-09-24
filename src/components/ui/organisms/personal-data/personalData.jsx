import React, { forwardRef } from 'react';
import { Box, InputLabel, OutlinedInput, useMediaQuery } from '@mui/material';
import { useMultistepContext } from 'src/context/multistepContext';
import { Controller, useFormContext } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './PersonalData.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';

const PhontInputComponent = forwardRef((props, ref) => {
  return (
    <OutlinedInput {...props} className={styles.phoneField} inputRef={ref} />
  );
});
export default function PersonalData({ activeStep, setActiveStep }) {
  const multiStepContext = useMultistepContext();
  const methods = useFormContext();
  const mobile = useMediaQuery('(max-width:767px)');

  function onSubmit(data) {
    multiStepContext.dispatch({ type: 'update', payload: data });

    console.log('data', data);
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
          <InputLabel htmlFor="nome">
            Nome:
            <sup>*</sup>
          </InputLabel>
          <Box className={styles.input}>
            <OutlinedInput
              id="nome"
              {...methods.register('personalData.nome')}
            />
            {methods.formState.errors.personalData?.nome && (
              <p className={styles.error}>
                {methods.formState.errors.personalData?.nome?.message}
              </p>
            )}
          </Box>
        </Box>
        <Box className={styles.wrapper}>
          <InputLabel htmlFor="email">
            E-mail:
            <sup>*</sup>
          </InputLabel>
          <Box className={styles.input}>
            <OutlinedInput
              id="email"
              className={styles.input}
              {...methods.register('personalData.email', {
                required: 'Por favor, preencha o campo com seu e-mail.',
                validate: {
                  matchPattern: (value) =>
                    / {22}^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
                      value,
                    ) || 'Por favor, preencha o campo com um email válido.',
                },
              })}
            />
            {methods.formState.errors.personalData?.email && (
              <p className={styles.error}>
                {methods.formState.errors.personalData?.email?.message}
              </p>
            )}
          </Box>
        </Box>
        <Box className={styles.phoneField}>
          <InputLabel htmlFor="phone-input">
            Telefone:
            <sup>*</sup>
          </InputLabel>
          <Box className={styles.input}>
            <Controller
              name="personalData.phone"
              control={methods.control}
              rules={{
                validate: {
                  matchPattern: (value) =>
                    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
                      value,
                    ) ||
                    'Por favor, preencha o campo com um número de telefone válido.',
                },
                required:
                  'Por favor, preencha o campo com seu número de telefone.',
              }}
              render={({ field }) => (
                <>
                  <PhoneInput
                    id="phone-input"
                    style={{
                      '--PhoneInputCountry': {
                        height: '100%',
                      },
                      '--PhoneInputCountryFlag': {
                        height: 'strech',
                        marginLeft: '2rem',
                      },
                    }}
                    defaultCountry="PT"
                    errors={
                      methods.formState.errors?.personalData?.phone?.message
                    }
                    placeholder="Enter phone number"
                    {...field}
                    inputComponent={PhontInputComponent}
                  />
                  {methods.formState.errors.personalData?.phone && (
                    <p className={styles.error}>
                      {methods.formState.errors.personalData?.phone?.message}
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
          activeStep={0}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          text="Próximo"
        />
      )}
    </form>
  );
}

PhontInputComponent.displayName = 'PhontInputComponent';

PersonalData.displayName = 'PersonalData';

PersonalData.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
