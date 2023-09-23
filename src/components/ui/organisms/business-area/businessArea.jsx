import { zodResolver } from '@hookform/resolvers/zod';
import { Box, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import { businessAreaSchema } from 'src/Schema/multistep-form/IBusinessArea';
import styles from './BusinessArea.module.scss';

export default function BusinessArea() {
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(businessAreaSchema),
    defaultValues: multiStepContext.state,
  });

  function onSubmit(data) {
    console.log('data', data);
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  console.log(multiStepContext);

  console.log(methods.getValues());
  console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box className={styles.container}>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="business-area">
              Qual é o seu setor de negócio?
            </InputLabel>
            <OutlinedInput
              id="business-area"
              {...methods.register('businessArea')}
            />
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}
