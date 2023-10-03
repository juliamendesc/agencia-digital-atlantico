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
import styles from './Website.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { websiteSchema } from 'src/Schema/multistep-form/IWebsite';
export default function Website({ activeStep, setActiveStep }) {
  const [stateValues, setStateValues] = React.useState({
    hasWebsite: '',
    websiteUrl: '',
  });
  const multiStepContext = useMultistepContext();
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    defaultValues: {
      hasWebsite: '',
      websiteUrl: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(websiteSchema),
  });

  const { hasWebsite, websiteUrl } = multiStepContext.state.website || {};

  React.useEffect(() => {
    if (hasWebsite || websiteUrl) {
      setStateValues({
        hasWebsite,
        websiteUrl,
      });
    }
  }, [hasWebsite, websiteUrl]);

  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  async function handleTrigger() {
    await trigger(['hasWebsite', 'websiteUrl']);
  }

  function onSubmit(data) {
    multiStepContext.dispatch({ type: 'update', payload: { website: data } });
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
            <InputLabel htmlFor="hasWebsite">
              Tem algum website associado ao seu negócio?
              <sup>*</sup>
            </InputLabel>
            <Controller
              name="hasWebsite"
              control={methods.control}
              render={({ field: { value, onChange, ...rest } }) => (
                <>
                  <ToggleButtonGroup
                    {...rest}
                    exclusive
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    value={value || multiStepContext.state.website.hasWebsite}
                    onChange={(_event, value) => {
                      setStateValues(value);
                      onChange(value);
                      multiStepContext.dispatch({
                        type: 'update',
                        payload: {
                          website: {
                            hasWebsite: value,
                          },
                        },
                      });

                      if (value === 'Não') {
                        methods.setValue('websiteUrl', null, {
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

                  {stateValues?.hasWebsite === 'Sim' && (
                    <>
                      <InputLabel htmlFor="website">
                        Por favor, insira o link do seu website.
                      </InputLabel>
                      <Box className={styles.input}>
                        <OutlinedInput
                          id="website"
                          placeholder='Ex.: "https://www.meusite.com.br"'
                          sx={{
                            '& .MuiInputBase-input': {
                              fontSize: '1.5rem',
                            },
                          }}
                          {...methods.register('websiteUrl', {
                            required:
                              'Por favor, preencha o campo com o link do seu website.',
                          })}
                          value={stateValues.websiteUrl || ''}
                          onChange={(e) => {
                            methods.register('websiteUrl').onChange(e);
                            setStateValues({
                              ...stateValues,
                              websiteUrl: e.target.value,
                            });
                          }}
                        />
                        {errors.websiteUrl && (
                          <p className={styles.error}>
                            {errors.websiteUrl?.message}
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
            activeStep={2}
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

Website.displayName = 'Website';

Website.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
