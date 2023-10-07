import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import NotFound404 from 'src/assets/not-found.jpg';

export default function Custom404() {
  return (
    <Box>
      <Image src={NotFound404} fill alt="page not found" />
    </Box>
  );
}
