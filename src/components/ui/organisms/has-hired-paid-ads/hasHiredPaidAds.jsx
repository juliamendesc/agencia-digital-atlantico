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
import styles from './HasHiredPaidAds.module.scss';
import { multistepFormSchema } from 'src/Schema/multistepForm';

export default function HasHiredPaidAds() {
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(multistepFormSchema.hasHiredPaidAdsSchema),
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
            <InputLabel htmlFor="hasHiredPaidAds">
              Já alguma vez investiu em publicidade paga?
            </InputLabel>

            <Controller
              name="hasHiredPaidAds"
              control={methods.control}
              render={({ field }) => (
                <>
                  <ToggleButtonGroup
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
                    <ToggleButton value={'Sim'}>Sim</ToggleButton>
                    <ToggleButton value={'Não'}>Não</ToggleButton>
                  </ToggleButtonGroup>

                  {methods.formState.errors.hasHiredPaidAds && (
                    <p className={styles.error}>
                      {methods.formState.errors.hasHiredPaidAds?.message}
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
