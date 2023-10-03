import {
  Box,
  InputLabel,
  Modal,
  OutlinedInput,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMultistepContext } from 'src/context/multistepContext';
import styles from './Budget.module.scss';
import PropTypes from 'prop-types';
import SubmitButton from 'src/components/ui/atoms/Submit-button';
import sendMultistepEmail from 'src/utils/sendMultiStepEmail';
import { zodResolver } from '@hookform/resolvers/zod';
import { monthlyBudgetSchema } from 'src/Schema/multistep-form/monthlyBudget';

const ErrorModal = () => {
  return (
    <Modal
      open={true}
      title="Oops! ✖️"
      message="Verifique se preencheu todos os campos obrigatórios corretamente."
    />
  );
};

export default function Budget({ activeStep, setActiveStep, setFormStatus }) {
  const multiStepContext = useMultistepContext();
  const [stateValue, setStateValue] = React.useState({
    monthlyBudget: '',
  });
  const mobile = useMediaQuery('(max-width:767px)');
  const methods = useForm({
    defaultValues: {
      monthlyBudget: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(monthlyBudgetSchema),
  });

  const {
    trigger,
    formState: { errors, isValid },
  } = methods;

  const { monthlyBudget } = multiStepContext.state.monthlyBudget || {};

  React.useEffect(() => {
    if (monthlyBudget) {
      setStateValue({
        monthlyBudget,
      });
    }
  }, [monthlyBudget]);

  async function handleTrigger() {
    await trigger('monthlyBudget');
  }

  function update(data) {
    handleTrigger();
    multiStepContext.dispatch({ type: 'update', payload: data });
  }

  function validateMultistepForm() {
    return handleTrigger() && isValid;
  }

  async function onSubmit() {
    const data = multiStepContext.state;
    const isFormValid = validateMultistepForm(data);
    if (Object.keys(errors).length > 0 || !isFormValid) {
      return <ErrorModal />;
    }
    if (isFormValid && Object.keys(errors).length === 0) {
      await sendMultistepEmail(data, setFormStatus);
    }
  }

  function handleBack() {
    update(methods.getValues());
    setActiveStep(activeStep - 1);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box className={styles.container}>
          <Box className={styles.wrapper}>
            <InputLabel htmlFor="budget">
              Quanto pretende gastar em anúncios mensalmente?
              <sup>*</sup>
            </InputLabel>
            <Box className={styles.input}>
              <OutlinedInput
                id="budget"
                sx={{
                  span: {
                    fontSize: '1.5rem',
                    color: '#000',
                  },
                }}
                endAdornment={<span>€</span>}
                {...methods.register('monthlyBudget', {})}
                value={stateValue?.monthlyBudget}
                onChange={(e) => {
                  methods.register('monthlyBudget').onChange(e);
                  setStateValue({ monthlyBudget: e.target.value });
                  multiStepContext.dispatch({
                    type: 'update',
                    payload: { monthlyBudget: e.target.value },
                  });
                }}
              />
              {errors.monthlyBudget && (
                <p className={styles.error}>{errors.monthlyBudget.message}</p>
              )}
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
            activeStep={7}
            clientName={multiStepContext.state.personalData.nome}
            setActiveStep={setActiveStep}
            handleBack={handleBack}
            handleNext={onSubmit}
            disabled={!isValid}
            text="Submeter"
          />
        )}
      </form>
    </FormProvider>
  );
}

Budget.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  setFormStatus: PropTypes.func,
};
