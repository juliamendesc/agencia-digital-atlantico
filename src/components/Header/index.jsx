'use client'
import  Styles from  './header.module.css';
import  Button  from '../Button';
import 'animate.css';
import React from 'react'

export function Header() {
  return (
      <div className={Styles.container}>
          <nav
          id={Styles.navBar} 
          className='animate__animated animate__fadeInDown'>
            {/* Logo aqui */}
          {/* <ul className={Styles.navList}></ul> */}
          <a href="#Home">Home</a>
          <a href="#atendimento">Atendimento</a>
          <a href="#servico">Serviço</a>
          <a href="#time">Time</a>
          <Button className={Styles.btnNav} title='Solicitar orçamento' />
          </nav>
      </div>  
)
  }

export default Header
