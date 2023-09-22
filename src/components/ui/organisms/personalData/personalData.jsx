import React from 'react';
import { Box, InputLabel, OutlinedInput } from '@mui/material';
import CountrySelect from 'src/components/ui/molecules/CountrySelect/CountrySelect';
import { useMultistepContext } from 'src/context/multistepContext';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import styles from './PersonalData.module.scss';
import { personalDataSchema } from 'src/Schema/multistep-form/IPersonalData';

export function PersonalData() {
  const multiStepContext = useMultistepContext();

  console.log(multiStepContext);

  const methods = useForm({
    resolver: zodResolver(personalDataSchema),
    defaultValues: multiStepContext.state,
  });

  function onSubmit(data) {
    console.log('data', data);
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  console.log(methods.getValues());
  console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box className={styles.container}>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="name">Nome:</InputLabel>
            <OutlinedInput id="name" {...methods.register('nome')} />
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
            <Box>
              <InputLabel htmlFor="phone">Telefone:</InputLabel>
            </Box>
            <Box className={styles.phoneWrapper}>
              <CountrySelect
                register={{ ...methods.register('countryCode') }}
              />
              <OutlinedInput
                id="phone"
                className={styles.input}
                {...methods.register('phone')}
              />
            </Box>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}

PersonalData.propTypes = {
  setActiveStep: PropTypes.func,
};
