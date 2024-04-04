import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  InputLabel,
  OutlinedInput,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import { useMultistepContext } from 'src/context/multistepContext';
import { instagramSchema } from 'src/Schema/multistep-form/IInstagram';
import styles from './Instagram.module.scss';

export default function Instagram({ activeStep, setActiveStep }) {
  const [stateValues, setStateValues] = React.useState({
    hasInstagram: '',
    instagramAccount: '',
  });
  const multiStepContext = useMultistepContext();
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    defaultValues: {
      hasInstagram: '',
      instagramAccount: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(instagramSchema),
    persist: true,
  });

  const { hasInstagram, instagramAccount } =
    multiStepContext.state.instagram || {};

  React.useEffect(() => {
    if (hasInstagram || instagramAccount) {
      setStateValues({
        hasInstagram,
        instagramAccount,
      });
    }
  }, [hasInstagram, instagramAccount]);

  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  async function handleTrigger() {
    await trigger(['hasInstagram', 'instagramAccount']);
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
            <InputLabel htmlFor="hasInstagram">
              Tem alguma conta de Instagram associada ao seu negócio?
              <sup>*</sup>
            </InputLabel>
            <Controller
              name="hasInstagram"
              control={methods.control}
              render={({ field: { onChange, ...rest } }) => (
                <>
                  <ToggleButtonGroup
                    {...rest}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    exclusive
                    value={stateValues.hasInstagram}
                    onChange={(_event, value) => {
                      setStateValues(value);
                      onChange(value);
                      multiStepContext.dispatch({
                        type: 'update',
                        payload: {
                          instagram: {
                            hasInstagram: value,
                          },
                        },
                      });

                      if (value === 'Não') {
                        methods.setValue('instagramAccount', null, {
                          shouldValidate: true,
                          shouldDirty: true,
                          shouldTouch: true,
                        });
                      }
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

                  {stateValues?.hasInstagram === 'Sim' && (
                    <>
                      <InputLabel htmlFor="instagram">
                        Por favor, insira o nome de usuário da sua conta do
                        instagram.
                      </InputLabel>
                      <Box className={styles.input}>
                        <OutlinedInput
                          id="instagram"
                          {...methods.register('instagramAccount', {
                            required:
                              'Por favor, preencha o campo com seu nome de usuário do Instagram.',
                          })}
                          value={stateValues.instagramAccount}
                          onChange={(e) => {
                            methods.register('instagramAccount').onChange(e);
                            setStateValues({
                              ...stateValues,
                              instagramAccount: e.target.value,
                            });
                          }}
                        />
                        {errors.instagramAccount && (
                          <p className={styles.error}>
                            {errors.instagramAccount?.message}
                          </p>
                        )}
                      </Box>
                    </>
                  )}
                </>
              )}
            />
          </Box>
          {!isValid && (
            <p className={styles.error}>
              Por favor, preencha todos os campos antes de continuar.
            </p>
          )}
        </Box>
        {!mobile && (
          <SubmitButton
            activeStep={3}
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

Instagram.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
