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
import styles from './Facebook.module.scss';
import { multistepFormSchema } from 'src/Schema/multistepForm';

export default function Facebook() {
  const [hasFacebook, setHasFacebook] = React.useState(false);
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(multistepFormSchema.facebookSchema),
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
            <InputLabel htmlFor="hasFacebook">
              Tem alguma página do Facebook associada ao seu negócio?
            </InputLabel>
            <Controller
              name="hasFacebook"
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
                    <ToggleButton value={true}>Sim</ToggleButton>
                    <ToggleButton value={false}>Não</ToggleButton>
                  </ToggleButtonGroup>

                  {!!hasFacebook && (
                    <>
                      <InputLabel htmlFor="facebook">
                        Por favor, insira o link do seu facebook.
                      </InputLabel>
                      <OutlinedInput
                        id="facebook"
                        {...methods.register('facebook')}
                      />
                      {methods.formState.errors.facebook && (
                        <p className={styles.error}>
                          {methods.formState.errors.facebook?.message}
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
