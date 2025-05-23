import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logoheader.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <Link to="/home">
                <img src={logo} alt="Logo" className="logo-header" />
            </Link>

            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-header ${menuOpen ? 'active' : ''}`}>
                <Link to="/professores" onClick={() => setMenuOpen(false)}>Para Professores</Link>
                <Link to="/alunos-praticantes" onClick={() => setMenuOpen(false)}>Para Alunos e Praticantes</Link>
                <Link to="/gamificacao" onClick={() => setMenuOpen(false)}>Gamificação</Link>
                <Link to="/sobre-nós" onClick={() => setMenuOpen(false)}>Quem somos</Link>
                <Link to="/cadastro-hub" onClick={() => setMenuOpen(false)}>
                    <button className="cadastre-se-btn">Cadastre-se</button>
                </Link>
            </nav>
        </header>
    );
};

export default Header;