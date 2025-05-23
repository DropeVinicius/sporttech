import React from "react";
import "./ImpactoGame.css";
import impactobanner from "../../assets/impactobanner.jpg";
import { Link } from 'react-router-dom';

export default function ImpactoGame() {
    return (
        <section className="conecte-se">
            {/* Primeiro background com imagem */}
            <div className="conecte-banner" style={{ backgroundImage: `url(${impactobanner})` }}>

                <div className="texto-banner">
                    <h2>
                        Nossa gamificação foi criado para transformar cada treino em uma jornada épica de evolução.
                    </h2>
                    <Link to="/cadastro-hub" className="botao-criar-conta">
                        Crie sua conta agora
                    </Link>
                </div>
            </div>
        </section>
    );
}