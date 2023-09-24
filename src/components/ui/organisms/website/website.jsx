import {
  Box,
  InputLabel,
  OutlinedInput,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './Website.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';
export default function Website({ activeStep, setActiveStep }) {
  const [hasWebsite, setHasWebsite] = React.useState('');
  const multiStepContext = useMultistepContext();
  const methods = useFormContext();
  const mobile = useMediaQuery('(max-width:767px)');

  function onSubmit(data) {
    console.log('data', data);
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  function handleNext() {
    setActiveStep(activeStep + 1);
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  console.log('state', multiStepContext);
  console.log('values', methods.getValues());
  console.log('erros', methods.formState.errors);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Box className={styles.container}>
        <Box className={styles.wrapper}>
          <InputLabel htmlFor="hasWebsite">
            Tem algum website associado ao seu negócio?
            <sup>*</sup>
          </InputLabel>
          <Controller
            name="website.hasWebsite"
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
                  value={value}
                  onChange={(_event, value) => {
                    setHasWebsite(value);
                    onChange(value);
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

                {hasWebsite === 'Sim' && (
                  <>
                    <InputLabel htmlFor="website">
                      Por favor, insira o link do seu website.
                    </InputLabel>
                    <Box className={styles.input}>
                      <OutlinedInput
                        id="website"
                        {...methods.register('website.websiteUrl', {
                          required:
                            'Por favor, preencha o campo com o link do seu website.',
                          validate: {
                            matchPattern: (value) =>
                              /^((https?:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w.-]+)(?::(\d+))?)?([/\\\w.()-]*)?(?:([?][^#]*)?(#.*)?)*/gim.test(
                                value,
                              ) || 'Por favor, insira um link válido.',
                          },
                        })}
                      />
                      {methods.formState.errors.website?.websiteUrl && (
                        <p className={styles.error}>
                          {
                            methods.formState.errors.website?.websiteUrl
                              ?.message
                          }
                        </p>
                      )}
                    </Box>
                  </>
                )}
              </>
            )}
          />
        </Box>
      </Box>
      {!mobile && (
        <SubmitButton
          activeStep={2}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          text="Próximo"
        />
      )}
    </form>
  );
}

Website.displayName = 'Website';

Website.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
