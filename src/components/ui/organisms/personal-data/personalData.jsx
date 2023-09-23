import React, { forwardRef } from 'react';
import { Box, InputLabel, OutlinedInput } from '@mui/material';
import { useMultistepContext } from 'src/context/multistepContext';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './PersonalData.module.scss';
import { personalDataSchema } from 'src/Schema/multistep-form/IPersonalData';

const PhontInputComponent = forwardRef((props, ref) => {
  return (
    <OutlinedInput {...props} className={styles.phoneField} inputRef={ref} />
  );
});
export default function PersonalData() {
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(personalDataSchema),
    defaultValues: multiStepContext.state,
  });

  function onSubmit(data) {
    console.log('data', data);
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  console.log(multiStepContext);
  console.log('form', methods.getValues());
  console.log('errors', methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box className={styles.container}>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="nome">Nome:</InputLabel>
            <OutlinedInput id="nome" {...methods.register('nome')} />
          </Box>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="email">E-mail:</InputLabel>
            <OutlinedInput
              id="email"
              className={styles.input}
              {...methods.register('email')}
            />
          </Box>
          <Box className={styles.phoneField}>
            <InputLabel htmlFor="phone-input">Telefone:</InputLabel>
            <Controller
              name="phone"
              control={methods.control}
              render={({ field }) => (
                <>
                  <PhoneInput
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
                    errors={methods.formState.errors?.phone?.message}
                    placeholder="Enter phone number"
                    {...field}
                    inputComponent={PhontInputComponent}
                  />
                  {methods.formState.errors.phone && (
                    <p className={styles.error}>
                      {methods.formState.errors.phone?.message}
                    </p>
                  )}
                </>
              )}
            />
          </Box>
        </Box>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

PhontInputComponent.displayName = 'PhontInputComponent';
