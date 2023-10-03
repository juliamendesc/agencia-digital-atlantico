import { Box, InputLabel, OutlinedInput, useMediaQuery } from '@mui/material';
import React from 'react';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './BusinessArea.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { businessAreaSchema } from 'src/Schema/multistep-form/IBusinessArea';

export default function BusinessArea({ activeStep, setActiveStep }) {
  const [stateValue, setStateValue] = React.useState({
    businessArea: '',
  });
  const multiStepContext = useMultistepContext();
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    defaultValues: {
      businessArea: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(businessAreaSchema),
  });
  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  const { businessArea } = multiStepContext.state.businessArea || {};

  React.useEffect(() => {
    if (businessArea) {
      setStateValue({
        businessArea,
      });
    }
  }, [businessArea]);

  async function handleTrigger() {
    await trigger('businessArea');
  }

  function onSubmit(data) {
    multiStepContext.dispatch({
      type: 'update',
      payload: data,
    });
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box className={styles.container}>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="business-area">
              Qual é o seu setor de negócio?
              <sup>*</sup>
            </InputLabel>
            <Box className={styles.input}>
              <OutlinedInput
                required
                id="business-area"
                {...methods.register('businessArea', {
                  required: 'Campo obrigatório',
                })}
                value={stateValue.businessArea}
                onChange={(e) => {
                  methods.register('businessArea').onChange(e);
                  setStateValue({ businessArea: e.target.value });
                }}
              />
              {errors.businessArea && (
                <span className={styles.error}>
                  {errors.businessArea.message}
                </span>
              )}
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
            activeStep={1}
            setActiveStep={setActiveStep}
            handleBack={handleBack}
            handleNext={handleNext}
            disabled={!isValid}
            text="Próximo"
          />
        )}
      </form>
    </FormProvider>
  );
}

BusinessArea.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
