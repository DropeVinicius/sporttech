import React from "react";
import './Footer.css';
import logofooter from '../../assets/logofooter.svg';
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>SportTech</h4>
                    <a href="#">Sobre nós</a>
                    <a href="#">Dúvidas</a>
                    <a href="#">Suporte</a>
                    <a href="#">Trabalhe conosco</a>
                </div>

                <div className="footer-column">
                    <h4>&nbsp;</h4> {/* Espaço vazio para alinhamento */}
                    <a href="#">Políticas</a>
                    <a href="#">Condições de uso do site</a>
                    <a href="#">Condições Gerais</a>
                    <a href="#">Política de privacidade</a>
                </div>

                <div className="footer-column">
                    <h4>Segunda à sexta</h4>
                    <p>09 às 18h</p>
                    <p><FaPhone className="icon" /> (11) 4000-0000</p>
                </div>

                <div className="footer-column logo-footer">
                    <img src={logofooter} alt="Logo Footer" />
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <span>SportTech © 2025 - Todos os direitos reservados.</span>
                <div className="footer-social">
                    <FaFacebookF className="social-icon" />
                    <FaInstagram className="social-icon" />
                    <FaLinkedinIn className="social-icon" />
                    <FaYoutube className="social-icon" />
                </div>
            </div>
        </footer>
    );
}