import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  InputLabel,
  OutlinedInput,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './Website.module.scss';
import { multistepFormSchema } from 'src/Schema/multistepForm';

export default function Website() {
  const [hasWebsite, setHasWebsite] = React.useState(false);
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(multistepFormSchema.websiteSchema),
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
            <InputLabel htmlFor="hasWebsite">
              Tem algum website associado ao seu negócio?
            </InputLabel>
            <Controller
              name="hasWebsite"
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
                    <ToggleButton value={true}>Sim</ToggleButton>
                    <ToggleButton value={false}>Não</ToggleButton>
                  </ToggleButtonGroup>

                  {!!hasWebsite && (
                    <>
                      <InputLabel htmlFor="website">
                        Por favor, insira o link do seu website.
                      </InputLabel>
                      <OutlinedInput
                        id="website"
                        {...methods.register('website')}
                      />
                      {methods.formState.errors.website && (
                        <p className={styles.error}>
                          {methods.formState.errors.website?.message}
                        </p>
                      )}
                    </>
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
