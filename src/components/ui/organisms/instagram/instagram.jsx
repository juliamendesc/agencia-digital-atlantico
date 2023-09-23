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
import styles from './Instagram.module.scss';
import { multistepFormSchema } from 'src/Schema/multistepForm';

export default function Instagram() {
  const [hasInstagram, setHasInstagram] = React.useState(false);
  const multiStepContext = useMultistepContext();

  const methods = useForm({
    resolver: zodResolver(multistepFormSchema.instagramSchema),
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
            <InputLabel htmlFor="hasInstagram">
              Tem alguma conta de Instagram associada ao seu negócio?
            </InputLabel>
            <Controller
              name="hasInstagram"
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
                    <ToggleButton value={true}>Sim</ToggleButton>
                    <ToggleButton value={false}>Não</ToggleButton>
                  </ToggleButtonGroup>

                  {!!hasInstagram && (
                    <>
                      <InputLabel htmlFor="instagram">
                        Por favor, insira o link do seu instagram.
                      </InputLabel>
                      <OutlinedInput
                        id="instagram"
                        {...methods.register('instagram')}
                      />
                      {methods.formState.errors.instagram && (
                        <p className={styles.error}>
                          {methods.formState.errors.instagram?.message}
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
