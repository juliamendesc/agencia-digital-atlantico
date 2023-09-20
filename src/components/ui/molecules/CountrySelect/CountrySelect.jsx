import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from 'src/data/countries';
import Image from 'next/image';
import { Box, TextField } from '@mui/material';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  select: {
    '& ul': {
      backgroundColor: '#cccccc',
      wrap: 'wrap',
    },
    '& li': {
      fontSize: 12,
      textAlign: 'left',
      textIndent: 0,
      padding: 0,
    },
    '&': {
      styles: {
        width: 400,
      },
    },
  },
});

export default function CountrySelect({ register }) {
  const classes = useStyles();

  return (
    <Autocomplete
      id="country-select"
      options={countries}
      ListboxProps={{
        className: classes.select,
      }}
      autoHighlight
      sx={{ width: 125 }}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            '& > img': { mr: 1, flexShrink: 0 },
          }}
          {...props}
        >
          <Image
            loading="lazy"
            width="15"
            height="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt="country flag"
          />
          {option.label} +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...register}
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

CountrySelect.propTypes = {
  register: PropTypes.object,
};
