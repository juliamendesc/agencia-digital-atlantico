import {
  Box,
  InputLabel,
  OutlinedInput,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './Facebook.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { facebookSchema } from 'src/Schema/multistep-form/IFacebook';

export default function Facebook({ activeStep, setActiveStep }) {
  const [stateValues, setStateValues] = React.useState({
    hasFacebook: '',
    facebookAccount: '',
  });
  const multiStepContext = useMultistepContext();
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    defaultValues: {
      hasFacebook: '',
      facebookAccount: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(facebookSchema),
  });

  const { hasFacebook, facebookAccount } =
    multiStepContext.state.facebook || {};

  React.useEffect(() => {
    if (hasFacebook || facebookAccount) {
      setStateValues({
        hasFacebook,
        facebookAccount,
      });
    }
  }, [hasFacebook, facebookAccount]);

  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  async function handleTrigger() {
    await trigger(['hasFacebook', 'facebookAccount']);
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
            <InputLabel htmlFor="hasFacebook">
              Tem alguma página do Facebook associada ao seu negócio?
              <sup>*</sup>
            </InputLabel>
            <Controller
              name="hasFacebook"
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
                    value={stateValues.hasFacebook}
                    onChange={(_event, value) => {
                      setStateValues(value);
                      onChange(value);
                      multiStepContext.dispatch({
                        type: 'update',
                        payload: {
                          facebook: {
                            hasFacebook: value,
                          },
                        },
                      });

                      if (value === 'Não') {
                        methods.setValue('facebookAccount', null, {
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

                  {stateValues.hasFacebook === 'Sim' && (
                    <>
                      <InputLabel htmlFor="facebook">
                        Por favor, insira a sua conta facebook.
                      </InputLabel>
                      <Box className={styles.input}>
                        <OutlinedInput
                          id="facebook"
                          {...methods.register('facebook.facebookAccount', {
                            required:
                              'Por favor, preencha o campo com o link do seu website.',
                          })}
                          value={stateValues.facebookAccount}
                          onChange={(e) => {
                            methods.register('facebookAccount').onChange(e);
                            setStateValues({
                              ...stateValues,
                              facebookAccount: e.target.value,
                            });
                          }}
                          onBlur={(e) => {
                            multiStepContext.dispatch({
                              type: 'update',
                              payload: {
                                facebook: {
                                  facebookAccount: e.target.value,
                                },
                              },
                            });
                          }}
                        />
                        {errors.facebookAccount && (
                          <p className={styles.error}>
                            {errors.facebookAccount?.message}
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
            activeStep={4}
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

Facebook.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
