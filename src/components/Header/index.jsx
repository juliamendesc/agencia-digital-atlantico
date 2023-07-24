'use client'
import  Styles from  './header.module.css';
import  Button  from '../Button';
import 'animate.css';
import React from 'react'

export function Header() {
  return (
    <div className="sticky">
       <div className={Styles.container}>
      
      <nav
      id={Styles.navBar} 
      className='animate__animated animate__fadeInDown'>
        {/* Logo aqui */}
      <a href="#Home">Home</a>
      <a href="#atendimento">Atendimento</a>
      <a href="#servico">Serviço</a>
      <a href="#time">Time</a>
      </nav>
      <div className={Styles.btnHeader}>
      <Button className={Styles.bn3637} title='Solicitar orçamento' />
      </div>
    </div>
     </div> 
)
  }

export default Header
