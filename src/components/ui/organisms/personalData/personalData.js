import React from 'react';
import { Box, InputLabel, OutlinedInput } from '@mui/material';

import styles from './PersonalData.module.scss';
import CountrySelect from 'src/components/ui/molecules/CountrySelect/CountrySelect';

export function PersonalData() {
  return (
    <Box className={styles.container}>
      <Box className={styles.wrapper}>
        <InputLabel htmlFor="name">Nome:</InputLabel>
        <OutlinedInput id="name" />
      </Box>
      <Box className={styles.wrapper}>
        <InputLabel htmlFor="email">E-mail:</InputLabel>
        <OutlinedInput id="email" className={styles.input} />
      </Box>
      <Box className={styles.phoneField}>
        <Box>
          <InputLabel htmlFor="phone">Telefone:</InputLabel>
        </Box>
        <Box className={styles.phoneWrapper}>
          <CountrySelect />
          <OutlinedInput id="phone" className={styles.input} />
        </Box>
      </Box>
    </Box>
  );
}
