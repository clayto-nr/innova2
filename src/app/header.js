// components/Header.js
'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <img src="/logo.svg" alt="Logo do Innovabot" />
      <div className="container-1">
        <nav>
          <a href="#section1"> Planos </a>
          <a href="#section2"> Integrações </a>
          <a href="https://wa.me/5584981261560"> Contato </a>
        </nav>
        <a href="https://app.innovabot.com.br/login"><button className="btn-1" href="https://app.innovabot.com.br/login"> Acessar conta </button></a>
        <a href="https://app.innovabot.com.br/signup"><button className="btn-2" href="https://app.innovabot.com.br/signup"> Cadastre-se </button></a>
      </div>
      <div className="container-none" onClick={toggleMenu}>
        <img src="/ic_round-menu.svg" alt="ic_round-menu" />
      </div>
      {isMenuOpen && (
        <div className="mobile-menu-popup">
          <button className="close-button" onClick={toggleMenu}>×</button>
          <nav>
            <a href="#section1" onClick={toggleMenu}> Planos </a>
            <a href="#section2" onClick={toggleMenu}> Integrações </a>
            <a href="https://wa.me/5511977690905" onClick={toggleMenu}> Contato </a>
            <a href="https://app.innovabot.com.br/login"><button className="btn-1" href="https://app.innovabot.com.br/login"> Acessar conta </button></a>
            <a href="https://app.innovabot.com.br/signup"><button className="btn-2" href="https://app.innovabot.com.br/signup"> Cadastre-se </button></a>
          </nav>
        </div>
      )}
      <style jsx>{`
        .container-1 {
          display: flex;
        }
        .container-none {
          display: none;
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .container-1 {
            display: none;
          }
          .container-none {
            display: flex;
          }
        }
        .mobile-menu-popup {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .mobile-menu-popup nav a {
          color: white;
          font-size: 24px;
          text-decoration: none;
          display: block;
          text-align: center;
        }
        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 32px;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;
