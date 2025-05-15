import React from "react";
import "./BeneficiosProf.css";
import firststep from "../../assets/firststep.svg";
import secondstep from "../../assets/secondstep.svg";
import thirdstep from "../../assets/thirdstep.svg";

export default function BeneficiosProf() {
    return (
        <section className="como-funciona">
            <h2>Benefícios</h2>
            <div className="cards-container">
                <div className="card">
                    <img src={firststep} alt="Cadastro" />
                    <h3>01. Crie aulas e treinos personalizados</h3>
                    <p>Use nossa plataforma intuitiva para montar treinos sob medida.</p>
                </div>
                <div className="card">
                    <img src={secondstep} alt="Conecte-se" />
                    <h3>02. Acesse novos alunos facilmente</h3>
                    <p>Seu perfil será exibido para praticantes de todo o Brasil.</p>
                </div>
                <div className="card">
                    <img src={thirdstep} alt="Participe" />
                    <h3>03. Controle sua agenda e seus ganhos</h3>
                    <p>Você define seus horários e acompanha seus pagamentos.</p>
                </div>
                <div className="card">
                    <img src={thirdstep} alt="Participe" />
                    <h3>04. Gamefique seus alunos para mais engajamento</h3>
                    <p>Desafios, medalhas e ranking tornam o aprendizado mais divertido.</p>
                </div>
            </div>

            <div className="botoes-container">
                <button>Seja um Professor SportTech</button>
            </div>
        </section>
    );
}