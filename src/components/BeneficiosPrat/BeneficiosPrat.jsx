import React from "react";
import "./BeneficiosPrat.css";
import firststep from "../../assets/firststep.svg";
import secondstep from "../../assets/secondstep.svg";
import thirdstep from "../../assets/thirdstep.svg";

export default function BeneficiosPrat() {
    return (
        <section className="como-funciona">
            <h2>Benefícios</h2>
            <div className="cards-container">
                <div className="card">
                    <img src={firststep} alt="Cadastro" />
                    <h3>01. Escolha seu esporte e professor ideal</h3>
                    <p>Encontre profissionais qualificados em diversas modalidades.</p>
                </div>
                <div className="card">
                    <img src={secondstep} alt="Conecte-se" />
                    <h3>02. Participe de desafios e eventos locais</h3>
                    <p>Pratique com metas reais e viva o esporte com a comunidade.</p>
                </div>
                <div className="card">
                    <img src={thirdstep} alt="Participe" />
                    <h3>03. Ganhe conquistas e evolua no seu tempo</h3>
                    <p>Cada treino concluído te leva a um novo nível</p>
                </div>
            </div>

            <div className="botoes-container">
                <button>Seja um Aluno ou Praticante</button>
            </div>
        </section>
    );
}