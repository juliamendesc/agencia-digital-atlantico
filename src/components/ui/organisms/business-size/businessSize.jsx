import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './BusinessSize.module.scss';
import { multistepFormSchema } from 'src/Schema/multistepForm';

export default function BusinessSize() {
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(multistepFormSchema.businessSizeSchema),
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
            <InputLabel htmlFor="business-size">
              Quantas pessoas trabalham na sua empresa?
            </InputLabel>
            <Controller
              name="businessSize"
              control={methods.control}
              render={({ field }) => (
                <>
                  <ToggleButtonGroup
                    id="business-size"
                    exclusive
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  >
                    <ToggleButton value="1-3">1-3</ToggleButton>
                    <ToggleButton value="4-10">4-10</ToggleButton>
                    <ToggleButton value="11-20">11-20</ToggleButton>
                    <ToggleButton value="21-50">21-50</ToggleButton>
                  </ToggleButtonGroup>

                  {methods.formState.errors.businessSize && (
                    <p className={styles.error}>
                      {methods.formState.errors.businessSize?.message}
                    </p>
                  )}
                </>
              )}
            />
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}
