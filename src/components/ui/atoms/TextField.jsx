import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function ValidationTextFields({
  error,
  label,
  defaultValue,
  helperText,
}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        error={error}
        id="outlined-error-helper-text"
        label={label}
        defaultValue={defaultValue}
        helperText={helperText}
      />
    </Box>
  );
}

ValidationTextFields.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  helperText: PropTypes.string,
};
