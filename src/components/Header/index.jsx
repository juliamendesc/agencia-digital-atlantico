'use client';
import Styles from './header.module.scss';
import Button from '../Button';
import 'animate.css';
import React from 'react';

export function Header() {
  return (
    <div className={Styles.sticky}>
      <div className={Styles.container}>
        <nav
          id={Styles.navBar}
          className="animate__animated animate__fadeInDown"
        >
          {/* Logo aqui */}
          <a href="#Home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#faq">FAQ</a>
          <a href="#quemsomos">Quem somos</a>
          <a href="#atendimento">Atendimento</a>
        </nav>
        <div className={Styles.btnHeader}>
          <Button className={Styles.bn3637} title="Solicitar orçamento" />
        </div>
      </div>
    </div>
  );
}

