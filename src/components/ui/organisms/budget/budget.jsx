import {
  Box,
  InputLabel,
  Modal,
  OutlinedInput,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './Budget.module.scss';
import PropTypes from 'prop-types';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import sendMultistepEmail from 'src/utils/sendMultiStepEmail';

const ErrorModal = () => {
  return (
    <Modal
      open={true}
      title="Oops! ✖️"
      message="Verifique se preencheu todos os campos obrigatórios corretamente."
    />
  );
};

export default function Budget({ activeStep, setActiveStep }) {
  const multiStepContext = useMultistepContext();
  const methods = useFormContext();
  const mobile = useMediaQuery('(max-width:767px)');

  function update(data) {
    console.log('data', data);
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  console.log(multiStepContext);

  function validateMultistepForm() {
    return methods.formState.isValid;
  }

  async function onSubmit() {
    const data = multiStepContext.state;
    const isFormValid = validateMultistepForm(data);
    console.log('isFormValid', isFormValid);
    const reset = methods.reset();
    if (Object.keys(methods.formState.errors).length > 0 || !isFormValid) {
      return <ErrorModal />;
    }
    if (isFormValid && Object.keys(methods.formState.errors).length === 0) {
      await sendMultistepEmail(data, setActiveStep, reset);
    }
  }

  function handleBack() {
    update(methods.getValues());
    setActiveStep(activeStep - 1);
  }

  console.log('state', multiStepContext);
  console.log('values', methods.getValues());
  console.log('erros', methods.formState.errors);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Box className={styles.container}>
        <Box className={styles.wrapper}>
          <InputLabel htmlFor="budget">
            Quanto pretende gastar em anúncios mensalmente?
            <sup>*</sup>
          </InputLabel>
          <Box className={styles.input}>
            <OutlinedInput
              type="string"
              id="budget"
              {...methods.register('monthlyBudget')}
            />
            {methods.formState.errors.monthlyBudget && (
              <p className={styles.error}>
                {methods.formState.errors.monthlyBudget.message}
              </p>
            )}
          </Box>
        </Box>
      </Box>
      {!mobile && (
        <SubmitButton
          activeStep={7}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={onSubmit}
          text="Submeter"
        />
      )}
    </form>
  );
}

Budget.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
