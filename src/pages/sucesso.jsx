import React from 'react';
import { Card } from '@mui/material';
import PropTypes from 'prop-types';

import styles from 'src/components/ui/organisms/submitted-form/SubmittedForm.module.scss';
import { useRouter } from 'next/router';

export default function SubmittedForm() {
  const router = useRouter();
  const { clientName } = router.query;

  return (
    <Card
      className={styles.container}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <h1>{`Muito obrigado ${clientName ? `, ${clientName} ` : ''}!`}</h1>
      <p>Vamos analisar o seu negócio e em breve entraremos em contacto.</p>
    </Card>
  );
}

SubmittedForm.propTypes = {
  clientName: PropTypes.string,
};
