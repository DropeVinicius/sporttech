import React from "react";
import '../styles/LoginPage.css';

import logoAluno from '../assets/logoaluno.png';

const LoginPraticantePage = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <img src={logoAluno} alt="Logo Praticante" className="logo" />
                <h2 className="title">Portal do Praticante</h2>
                <p className="subtitle">Entre para explorar esportes, eventos e desafios locais.</p>

                <input
                    type="email"
                    className="input-field"
                    placeholder="E-mail"
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Senha"
                />
                <button className="button">ENTRAR</button>

                <p className="forgot-password">Esqueci minha senha</p>
                <p className="language-selector">🌐 Português - BR</p>
            </div>
        </div>
    );
};

export default LoginPraticantePage;