"use client"
import  styles from './styles.module.css';
import React from 'react'

function Button({ title, loading, ...rest }) {
  return (
    <button
    className={styles.BtnAll}
    disabled={loading}
    {...rest}>
      {title}
    </button>
  )
}

export default Button