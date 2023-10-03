import {
  Box,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './HasHiredPaidAds.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { hasHiredPaidAdsSchema } from 'src/Schema/multistep-form/hasHiredPaidAds';

export default function HasHiredPaidAds({ activeStep, setActiveStep }) {
  const multiStepContext = useMultistepContext();
  const mobile = useMediaQuery('(max-width:767px)');
  const [stateValues, setStateValues] = React.useState({
    hasHiredPaidAds: '',
  });
  const methods = useForm({
    defaultValues: {
      hasHiredPaidAds: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(hasHiredPaidAdsSchema),
  });
  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  const { hasHiredPaidAds } = multiStepContext.state.hasHiredPaidAds || {};

  React.useEffect(() => {
    if (hasHiredPaidAds) {
      setStateValues({
        hasHiredPaidAds,
      });
    }
  }, [hasHiredPaidAds]);

  async function handleTrigger() {
    await trigger('hasHiredPaidAds');
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box className={styles.container}>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="hasHiredPaidAds">
              Já alguma vez investiu em publicidade paga?
              <sup>*</sup>
            </InputLabel>

            <Box className={styles.input}>
              <Controller
                name="hasHiredPaidAds"
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
                      {...field}
                      value={stateValues.hasHiredPaidAds}
                      onChange={(e) => {
                        field.onChange(e);
                        setStateValues({ hasHiredPaidAds: e.target.value });
                      }}
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

                    {errors.hasHiredPaidAds && (
                      <p className={styles.error}>
                        {errors.hasHiredPaidAds?.message}
                      </p>
                    )}
                  </>
                )}
              />
            </Box>
          </Box>
        </Box>{' '}
        {!isValid && (
          <p className={styles.error}>
            Por favor, preencha todos os campos antes de continuar.
          </p>
        )}
        {!mobile && (
          <SubmitButton
            activeStep={6}
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

HasHiredPaidAds.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
