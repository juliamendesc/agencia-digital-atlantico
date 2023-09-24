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
import styles from './Facebook.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';

export default function Facebook({ activeStep, setActiveStep }) {
  const [hasFacebook, setHasFacebook] = React.useState('');
  const multiStepContext = useMultistepContext();
  const mobile = useMediaQuery('(max-width:767px)');

  const methods = useFormContext();

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
          <InputLabel htmlFor="hasFacebook">
            Tem alguma página do Facebook associada ao seu negócio?
            <sup>*</sup>
          </InputLabel>
          <Controller
            name="facebook.hasFacebook"
            control={methods.control}
            render={({ field: { value, onChange, ...rest } }) => (
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
                  value={value}
                  onChange={(_event, value) => {
                    setHasFacebook(value);
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

                {hasFacebook === 'Sim' && (
                  <>
                    <InputLabel htmlFor="facebook">
                      Por favor, insira o link do seu facebook.
                    </InputLabel>
                    <Box className={styles.input}>
                      <OutlinedInput
                        id="facebook"
                        {...methods.register('facebook.facebookAccount', {
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
                      {methods.formState.errors.facebook?.facebookAccount && (
                        <p className={styles.error}>
                          {
                            methods.formState.errors.facebook?.facebookAccount
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
          activeStep={4}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          text="Próximo"
        />
      )}
    </form>
  );
}

Facebook.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
