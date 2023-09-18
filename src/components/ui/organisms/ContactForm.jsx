import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './contactForm.module.css';

export default function ContactForm() {
  return (
    <Box className={styles.container}>
      <Typography variant="h1">Contact Form</Typography>
    </Box>
  );
}
