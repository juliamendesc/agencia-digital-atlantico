import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from 'src/data/countries';
import Image from 'next/image';
import { Box, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function CountrySelect({ register }) {
  return (
    <Autocomplete
      id="country-select"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <Image
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...register}
          {...params}
          label="Choose a country"
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
