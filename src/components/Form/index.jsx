'use client';
import Styles from './form.module.scss';
import React from 'react';
export function FormContact() {
 


  return (
    <div id='atendimento' className={Styles.container}>
      <h3>Atendimento</h3>
      <h1>Entre em contato conosco</h1>
      <p>
        Estamos ansiosos por ajudar a ter sucesso na sua jornada de Marketing
        digital. Entre em contato connosco preenchendo o formulário ou
        utilizando as nossas informações de contato. A nossa equipa de
        atendimento, entrará em contato para ajudar nas suas necessidades.
      </p>
      <div className={Styles.loginBox}>
        <h2>Formulário de Contato</h2>
        <form>
          <div className={Styles.userBox}>
            <input type="text" name="name" required />
            <label>Nome</label>
          </div>
          <div className={Styles.userBox}>
            <input type="email" name="password" required />
            <label>Email</label>
          </div>
          <div className={Styles.userBox}>
            <input type="text" name="assunto" required />
            <label>Assunto</label>
          </div>
          <div className={Styles.userBox}>
            <textarea name="texto" rows="6" cols="50" />
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

      <div className={Styles.box2}>
      <div className={Styles.loginBox}>
        <h2>Fale conosco</h2>
        <form>
          <div className={Styles.userBox}>
            <input type="text" name="name" required />
            <label>Nome</label>
          </div>
          <div className={Styles.userBox}>
            <input type="number" name="name" required />
            <label>Contato</label>
          </div>
          <div className={Styles.userBox}>
            <input type="email" name="password" required />
            <label>Email</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Solicitar  Contato
          </a>
        </form>
      </div>
      </div>
    </div>
  );
}
