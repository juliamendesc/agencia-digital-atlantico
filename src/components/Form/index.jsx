'use client'
import Styles from './form.module.scss'
import React from 'react'

export  function FormContact() {
    return (
    // Usar o react hook form
    <body className={Styles.body}>
    <div className={Styles.loginBox}>
  <h2>Formulário de Contato</h2>
  <form>
    <div className={Styles.userBox}>
      <input type="text" name="name" required/>
      <label>Nome</label>
    </div>
    <div className={Styles.userBox}>
      <input type="email" name="password" required />
      <label>Email</label>
    </div>
    <div className={Styles.userBox}>
        <input type="text" name="assunto" required/>
        <label>Assunto</label>
    </div>
    <div className={Styles.userBox}>
        <textarea  name="texto" rows="6" cols="50" />
        <label>Escreva Sua mensagem</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Enviar mensagem
    </a>
  </form>
</div>
</body>
)
}