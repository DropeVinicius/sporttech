import React from "react";
import '../styles/LoginPage.css';

import logoAluno from '../assets/logoaluno.png';

const LoginAlunoPage = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <img src={logoAluno} alt="Logo Aluno" className="logo" />
                <h2 className="title">Portal do Aluno</h2>
                <p className="subtitle">Faça login para acompanhar seus treinos e seu progresso.</p>

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

export default LoginAlunoPage;
