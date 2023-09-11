import React from 'react';
import Image from 'next/image';
import Styles from './footer.module.scss';
import { Link } from 'react-scroll';
import  logo  from '../../assets/logoatla4.png'

export function Footer() {
  return (
    <footer className={Styles.footerDistributed}>
      <div className={Styles.footerLeft}>
        <h3>
          Agência<span>Digital Atlântico</span>
        </h3>

        <p className={Styles.footerLinks}>
          <Link
            Link
            href="#home"
            to="home"
            smooth={true}
            duration={700}
            className={Styles.link1}
          >
            Home
          </Link>

          <Link href="#servicos" 
          to="servicos" 
          smooth={true} 
          duration={800}>
            Serviços
          </Link>

          <Link
              href="#beneficios"
              to="beneficios"
              smooth={true}
              duration={700}>
                Benefícios</Link>

          <Link
              href="#quemsomos"
              to="quemsomos"
              smooth={true}
              duration={700}>Quem Somos</Link>

          <Link
              href="#faq"
              to="faq"
              smooth={true}
              duration={700}>Faq</Link>

          <Link
              href="#atendimento"
              to="atendimento"
              smooth={true}
              duration={700}>Atendimento</Link>
        </p>

        <p className={Styles.footerCompanyName}>Agência Digital Atlântico © 2023</p>
      </div>

      <div className={Styles.footerCenter}>
        <div>
          <i ><fa-icon className="fa fa-map-marker" ></fa-icon> </i>
          <p>
            <span>Address</span> conselho, Lisboa
          </p>
        </div>

        <div>
          <i></i>
          <p>Contato +351....</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className={Styles.footerRight}>
        <p className={Styles.footerCompanyAbout}>
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className={Styles.footerIcons}>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
    
        
        </div>
      </div>
    </footer>
  );
}
