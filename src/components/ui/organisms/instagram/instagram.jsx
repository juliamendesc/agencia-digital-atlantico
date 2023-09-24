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
import styles from './Instagram.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';

export default function Instagram({ activeStep, setActiveStep }) {
  const [hasInstagram, setHasInstagram] = React.useState('');
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
          <InputLabel htmlFor="hasInstagram">
            Tem alguma conta de Instagram associada ao seu negócio?
            <sup>*</sup>
          </InputLabel>
          <Controller
            name="instagram.hasInstagram"
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
                    setHasInstagram(value);
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

                {hasInstagram === 'Sim' && (
                  <>
                    <InputLabel htmlFor="instagram">
                      Por favor, insira o link do seu instagram.
                    </InputLabel>
                    <Box className={styles.input}>
                      <OutlinedInput
                        id="instagram"
                        {...methods.register('instagram.instagramAccount', {
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
                      {methods.formState.errors.instagram?.instagramAccount && (
                        <p className={styles.error}>
                          {
                            methods.formState.errors.instagram?.instagramAccount
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
          activeStep={3}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          handleNext={handleNext}
          text="Próximo"
        />
      )}
    </form>
  );
}

Instagram.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
