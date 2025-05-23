import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logoheader.svg';

const Header = () => {
    return (
        <header className="header">
            <Link to="/home">
                <img src={logo} alt="Logo" className="logo-header" />
            </Link>
            <nav className="nav-header">
                <Link to="/professores">Para Professores</Link>
                <Link to="/alunos-praticantes">Para Alunos e Praticantes</Link>
                <Link to="/gamificacao">Gamificação</Link>
                <Link to="/sobre-nós">Quem somos</Link>
                <button className="cadastre-se-btn">Cadastre-se</button>
            </nav>
        </header>
    );
};

export default Header;