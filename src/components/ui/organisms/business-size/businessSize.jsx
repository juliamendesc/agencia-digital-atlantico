import {
  Box,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './BusinessSize.module.scss';
import PropTypes from 'prop-types';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import { zodResolver } from '@hookform/resolvers/zod';
import { businessSizeSchema } from 'src/Schema/multistep-form/IBusinessSize';

export default function BusinessSize({ activeStep, setActiveStep }) {
  const multiStepContext = useMultistepContext();
  const [stateValue, setStateValue] = React.useState({
    businessSize: '',
  });
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    defaultValues: {
      businessSize: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(businessSizeSchema),
  });
  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  const { businessSize } = multiStepContext.state.businessSize || {};

  React.useEffect(() => {
    if (businessSize) {
      setStateValue({
        businessSize,
      });
    }
  }, [businessSize]);

  async function handleTrigger() {
    await trigger('businessSize');
  }

  function onSubmit(data) {
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  function handleNext() {
    handleTrigger();
    setActiveStep(activeStep + 1);
    onSubmit(methods.getValues());
  }

  function handleBack() {
    handleTrigger();
    setActiveStep(activeStep - 1);
    onSubmit(methods.getValues());
  }

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
              name="businessSize"
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
                    {...field}
                    value={stateValue.businessSize}
                    onChange={(e, value) => {
                      field.onChange(value);
                      setStateValue({ businessSize: value });
                      multiStepContext.dispatch({
                        type: 'update',
                        payload: { businessSize: value },
                      });
                    }}
                  >
                    <ToggleButton value="1-3">1-3</ToggleButton>
                    <ToggleButton value="4-10">4-10</ToggleButton>
                    <ToggleButton value="11-20">11-20</ToggleButton>
                    <ToggleButton value="21-50">21-50</ToggleButton>
                  </ToggleButtonGroup>

                  {errors.businessSize && (
                    <p className={styles.error}>
                      {errors.businessSize?.message}
                    </p>
                  )}
                </>
              )}
            />
          </Box>
        </Box>
        {!isValid && (
          <p className={styles.error}>
            Por favor, preencha todos os campos antes de continuar.
          </p>
        )}
      </Box>
      {!mobile && (
        <SubmitButton
          activeStep={5}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          disabled={!isValid}
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
