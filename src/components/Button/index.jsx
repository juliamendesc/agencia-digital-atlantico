import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
export default function Button({ title, loading, ...rest }) {
  return (
    <button className={styles.bn3637} disabled={loading} {...rest}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
