'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from 'src/components/ui/templates/ContactForm/ContactForm.module.scss';
import { contactSchema } from 'src/Schema/contact';

export default function ContactForm() {
  const methods = useForm({
    defaultValues: {
      nome: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data) {
    const { nome, phone, email, subject, message } = data;

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, phone, email, subject, message }),
    })
      .then((res) => {
        if (res.status === 200) {
          <Modal
            title="Sucesso 🎊"
            message="Email enviado com sucesso! Você será redirecionado para a página principal"
          />;
          methods.reset();
          window.location.href = '/';
        }
      })
      .catch((err) => {
        console.log("Error: Couldn't send email", err);
      });
  }

  return (
    <div id="atendimento" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textForm}>
          <h1>Entre em contato conosco</h1>
          <p>
            Estamos ansiosos por ajudar a ter sucesso na sua jornada de
            Marketing digital. Entre em contato connosco preenchendo o
            formulário ou utilizando as nossas informações de contato. A nossa
            equipa de atendimento, entrará em contato para ajudar nas suas
            necessidades.
          </p>
        </div>

        <div className={styles.formBox}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.userBox}>
              <input
                type="text"
                id="form-name"
                {...methods.register('nome', {
                  required: 'Por favor, preencha o campo com seu nome.',
                })}
              />
              <label htmlFor="form-name">Nome completo</label>
            </div>
            {methods.formState.errors.name && (
              <p className={styles.error}>
                {methods.formState.errors.name?.message}
              </p>
            )}

            <div className={styles.userBox}>
              <input
                type="number"
                placeholder="+351 999 999 999"
                id="form-phone"
                {...methods.register('phone', {
                  required:
                    'Por favor, preencha o campo com seu número de telefone.',
                  validate: {
                    matchPattern: (value) =>
                      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
                        value,
                      ) ||
                      'Por favor, preencha o campo com um número de telefone válido.',
                  },
                })}
              />
              <label htmlFor="form-phone">Contato</label>
              {methods.formState.errors.phone && (
                <p className={styles.error}>
                  {methods.formState.errors.phone?.message}
                </p>
              )}
            </div>

            <div className={styles.userBox}>
              <input
                type="email"
                id="form-email"
                {...methods.register('email', {
                  required: 'Por favor, preencha o campo com seu email.',
                  validate: {
                    matchPattern: (value) =>
                      / {22}^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
                        value,
                      ) || 'Por favor, preencha o campo com um email válido.',
                  },
                })}
              />
              <label htmlFor="form-email">Email</label>
              {methods.formState.errors.email && (
                <p className={styles.error}>
                  {methods.formState.errors.email?.message}
                </p>
              )}
            </div>

            <div className={styles.selectBox}>
              <select
                id="form-subject"
                className={styles.selectSubject}
                defaultValue={'Selecione o assunto'}
                {...methods.register('subject', {
                  required: 'Por favor, selecione um assunto.',
                })}
              >
                <option value="Selecione o assunto" disabled>
                  Selecione o assunto
                </option>
                <option value="Contacto">Contacto</option>
                <option value="Orçamento">Orçamento</option>
                <option value="Dúvida">Dúvida</option>
                <option value="Outro">Outro</option>
              </select>
              <label htmlFor="form-subject">Assunto</label>
            </div>
            {methods.formState.errors.subject && (
              <p className={styles.error}>
                {methods.formState.errors.subject?.message}
              </p>
            )}

            <div className={styles.userBox}>
              <textarea
                rows="6"
                cols="50"
                id="form-message"
                {...methods.register('message', {
                  required: 'Por favor, preencha o campo com sua mensagem.',
                })}
              />
              <label htmlFor="form-message">Escreva sua mensagem</label>
            </div>
            {methods.formState.errors.message && (
              <p className={styles.error}>
                {methods.formState.errors.message?.message}
              </p>
            )}

            <div className={styles.buttonWrapper}>
              <button
                id="formButton"
                type="submit"
                disabled={methods.formState.isSubmitting}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Solicitar contato
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
