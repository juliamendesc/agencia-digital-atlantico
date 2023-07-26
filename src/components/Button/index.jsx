'use client';
import styles from './button.module.scss';
import React from 'react';

function Button({ title, loading, ...rest }) {
  return (
    <button className={styles.bn3637} disabled={loading} {...rest}>
      {title}
    </button>
  );
}

export default Button;
