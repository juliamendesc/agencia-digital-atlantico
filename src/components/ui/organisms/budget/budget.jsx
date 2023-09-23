import { zodResolver } from '@hookform/resolvers/zod';
import { Box, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './Budget.module.scss';
import { multistepFormSchema } from 'src/Schema/multistepForm';

export default function Budget() {
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(multistepFormSchema.monthlyBudgetSchema),
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
            <InputLabel htmlFor="budget">
              Quanto pretende gastar em anúncios mensalmente?
            </InputLabel>
            <OutlinedInput
              type="number"
              id="budget"
              {...methods.register('monthlyBudget')}
            />
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}
