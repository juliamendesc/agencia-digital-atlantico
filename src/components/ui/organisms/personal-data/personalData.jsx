import React, { forwardRef } from 'react';
import { Box, InputLabel, OutlinedInput, useMediaQuery } from '@mui/material';
import { useMultistepContext } from 'src/context/multistepContext';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './PersonalData.module.scss';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import PropTypes from 'prop-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalDataSchema } from 'src/Schema/multistep-form/IPersonalData';

const PhoneInputComponent = forwardRef((props, ref) => {
  return (
    <OutlinedInput {...props} className={styles.phoneField} inputRef={ref} />
  );
});
export default function PersonalData({ activeStep, setActiveStep }) {
  const [stateValues, setStateValues] = React.useState({
    nome: '',
    email: '',
    phone: '',
  });
  const multiStepContext = useMultistepContext();
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    defaultValues: {
      nome: '',
      email: '',
      phone: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(personalDataSchema),
  });

  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  const { nome, email, phone } = multiStepContext.state.personalData || {};

  React.useEffect(() => {
    if (nome || email || phone) {
      setStateValues({
        nome,
        email,
        phone,
      });
    }
  }, [nome, email, phone]);

  async function handleTrigger() {
    await trigger(['nome', 'email', 'phone']);
  }

  function onSubmit(data) {
    multiStepContext.dispatch({
      type: 'update',
      payload: { personalData: data },
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
            <InputLabel htmlFor="nome">
              Nome:
              <sup>*</sup>
            </InputLabel>
            <Box className={styles.input}>
              <OutlinedInput
                required
                id="nome"
                {...methods.register('nome', {
                  required: 'Por favor, preencha o campo com seu nome.',
                  minLength: {
                    value: 3,
                    message: 'Nome deve ter no mínimo 3 caracteres',
                  },
                })}
                value={stateValues.nome}
                onChange={(e) => {
                  methods.register('nome').onChange(e);
                  setStateValues({ ...stateValues, nome: e.target.value });
                }}
              />
              {errors.nome && (
                <p className={styles.error}>{errors.nome?.message}</p>
              )}
            </Box>
          </Box>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="email">
              E-mail:
              <sup>*</sup>
            </InputLabel>
            <Box className={styles.input}>
              <OutlinedInput
                id="email"
                type="email"
                required
                className={styles.input}
                {...methods.register('email', {
                  required: 'Por favor, preencha o campo com seu e-mail.',
                  minLength: {
                    value: 3,
                    message: 'E-mail inválido',
                  },
                  validate: {
                    matchPattern: (value) =>
                      / {22}^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
                        value,
                      ) || 'Por favor, preencha o campo com um email válido.',
                  },
                })}
                value={stateValues.email}
                onChange={(e) => {
                  methods.register('email').onChange(e);
                  setStateValues({ ...stateValues, email: e.target.value });
                }}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email?.message}</p>
              )}
            </Box>
          </Box>
          <Box className={styles.phoneField}>
            <InputLabel htmlFor="phone-input">
              Telefone:
              <sup>*</sup>
            </InputLabel>
            <Box className={styles.input}>
              <Controller
                name="phone"
                control={methods.control}
                rules={{
                  required:
                    'Por favor, preencha o campo com seu número de telefone.',
                  minLength: {
                    value: 9,
                    message: 'Telefone inválido',
                  },
                  validate: {
                    matchPattern: (value) =>
                      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
                        value,
                      ) ||
                      'Por favor, preencha o campo com um número de telefone válido.',
                  },
                }}
                render={({ field }) => (
                  <>
                    <PhoneInput
                      required
                      id="phone-input"
                      style={{
                        '--PhoneInputCountry': {
                          height: '100%',
                        },
                        '--PhoneInputCountryFlag': {
                          height: 'strech',
                          marginLeft: '2rem',
                        },
                      }}
                      defaultCountry="PT"
                      errors={errors?.personalData?.phone?.message}
                      placeholder="Enter phone number"
                      {...field}
                      value={
                        stateValues.phone?.length === 13
                          ? stateValues.phone?.slice(4)
                          : stateValues.phone || ''
                      }
                      onChange={(value) => {
                        field.onChange(value);
                        setStateValues({ ...stateValues, phone: value });
                      }}
                      inputComponent={PhoneInputComponent}
                      numberInputProps={{
                        value:
                          stateValues.phone?.length === 13
                            ? stateValues.phone?.slice(4)
                            : stateValues.phone || '',
                      }}
                    />
                    {errors.phone && (
                      <p className={styles.error}>{errors.phone?.message}</p>
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
            activeStep={0}
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

PhoneInputComponent.displayName = 'PhontInputComponent';

PersonalData.displayName = 'PersonalData';

PersonalData.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
};
