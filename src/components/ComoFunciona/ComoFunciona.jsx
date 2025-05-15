import React from "react";
import "./ComoFunciona.css";
import { Link } from "react-router-dom";
import firststep from "../../assets/firststep.svg";
import secondstep from "../../assets/secondstep.svg";
import thirdstep from "../../assets/thirdstep.svg";

export default function ComoFunciona() {
    return (
        <section className="como-funciona">
            <h2>Como funciona:</h2>
            <div className="cards-container">
                <div className="card">
                    <img src={firststep} alt="Cadastro" />
                    <h3>01. Cadastre-se</h3>
                    <p>Crie sua conta e personalize seu perfil para começar sua jornada esportiva.</p>
                </div>
                <div className="card">
                    <img src={secondstep} alt="Conecte-se" />
                    <h3>02. Conecte-se com professores e praticantes</h3>
                    <p>Encontre professores ou praticantes com os mesmos interesses e objetivos.</p>
                </div>
                <div className="card">
                    <img src={thirdstep} alt="Participe" />
                    <h3>03. Participe, evolua e ganhe conquistas</h3>
                    <p>Entre em desafios, evolua suas habilidades e colecione conquistas únicas.</p>
                </div>
            </div>

            <div className="botoes-container">
                <Link to="/professores" className="botao-link">Para professores</Link>
                <Link to="/alunos-praticantes" className="botao-link">Para alunos e praticantes</Link>
            </div>
        </section>
    );
}