import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import styles from 'src/components/ui/molecules/StepperDesktop/StepperDesktop.module.scss';

export default function SubmitButton({
  text,
  activeStep,
  handleBack,
  handleNext,
  disabled,
}) {
  return (
    <React.Fragment>
      <Box
        sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
        className={styles.stepperButtons}
      >
        <Button
          type="submit"
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1, color: 'var(--color-footer)' }}
        >
          Anterior
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button
          sx={{ mr: 1 }}
          type="submit"
          onClick={handleNext}
          disabled={disabled}
        >
          {text}
        </Button>
      </Box>
    </React.Fragment>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
