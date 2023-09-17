'use client';

import React from 'react';
import Styles from 'src/components/Form/form.module.scss';

export function FormContact() {
  return (
    <div id="atendimento" className={Styles.container}>
      <div className={Styles.textForm}>
        <h3>Atendimento</h3>
        <h1>Entre em contato conosco</h1>
        <p>
          Estamos ansiosos por ajudar a ter sucesso na sua jornada de Marketing
          digital. Entre em contato connosco preenchendo o formulário ou
          utilizando as nossas informações de contato. A nossa equipa de
          atendimento, entrará em contato para ajudar nas suas necessidades.
        </p>
      </div>
      <div className={Styles.box1}>
        <div className={Styles.loginBox}>
          <h2>Formulário de Contato</h2>
          <form>
            <div className={Styles.userBox}>
              <input type="text" name="name" required id="form-name" />
              <label htmlFor="form-name">Nome</label>
            </div>
            <div className={Styles.userBox}>
              <input
                type="number"
                name="assunto"
                placeholder="+351"
                required
                id="form-phone"
              />
              <label htmlFor="form-phone">Contato</label>
            </div>
            <div className={Styles.userBox}>
              <input type="email" name="email" required id="form-email" />
              <label htmlFor="form-email">Email</label>
            </div>
            <div className={Styles.userBox}>
              <input type="text" name="assunto" required id="form-subject" />
              <label htmlFor="form-subject">Assunto</label>
            </div>
            <div className={Styles.userBox}>
              <textarea name="texto" rows="6" cols="50" id="form-message" />
              <label htmlFor="form-message">Escreva Sua mensagem</label>
            </div>
            <>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Solicitar contato
            </>
          </form>
        </div>
      </div>
    </div>
  );
}
