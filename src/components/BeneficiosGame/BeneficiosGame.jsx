import React from "react";
import "./BeneficiosGame.css";
import firststep from "../../assets/firststep.svg";
import secondstep from "../../assets/secondstep.svg";
import thirdstep from "../../assets/thirdstep.svg";
import { Link } from 'react-router-dom';

export default function BeneficiosGame() {
    return (
        <section className="como-funciona">
            <h2>Benefícios</h2>
            <div className="cards-container">
                <div className="card">
                    <img src={firststep} alt="Cadastro" />
                    <h3>01. Pontos de Experiência (XP)</h3>
                    <p>Ganhe ao completar treinos e desafios.</p>
                </div>
                <div className="card">
                    <img src={secondstep} alt="Conecte-se" />
                    <h3>02. Conquistas e Medalhas</h3>
                    <p>Desbloqueie ao atingir metas.</p>
                </div>
                <div className="card">
                    <img src={thirdstep} alt="Participe" />
                    <h3>03. Ranking Local e Nacional</h3>
                    <p>Veja como você se destaca entre outros atletas.</p>
                </div>
                <div className="card">
                    <img src={thirdstep} alt="Participe" />
                    <h3>04. Desafios Temáticos</h3>
                    <p>Eventos com prêmios e recompensas digitais.</p>
                </div>
            </div>

            <div className="botoes-container">
                <Link to="/sobre-nós" className="botao-saiba-mais">
                    Saiba mais sobre a SportTech
                </Link>
            </div>
        </section>
    );
};