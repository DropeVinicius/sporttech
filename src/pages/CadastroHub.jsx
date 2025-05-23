import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CadastroHub.css'; // Agora com background aplicado

export default function CadastroHub() {
    return (
        <div className="cadastro-hub-page">
            <div className="overlay"></div>

            <div className="hub-content">
                <h1 className="hub-title">Como você deseja se cadastrar?</h1>
                <p className="hub-subtitle">Escolha a opção que mais combina com você:</p>

                <div className="hub-buttons">
                    <Link to="/cadastro-aluno" className="hub-button aluno">Sou Aluno</Link>
                    <Link to="/cadastro-praticante" className="hub-button praticante">Sou Praticante</Link>
                    <Link to="/cadastro-professor" className="hub-button professor">Sou Professor</Link>
                </div>
            </div>
        </div>
    );
}
