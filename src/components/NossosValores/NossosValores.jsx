import React from "react";
import "./NossosValores.css";
import { Link } from "react-router-dom";
import inclusao from "../../assets/inclusao.jpg";
import saude from "../../assets/saude.jpg";
import inovacao from "../../assets/inovacao.jpg";

export default function NossosValores() {
    return (
        <section className="conecte-se">
            <div className="conecte-fundo">
                <h2 className="titulo-centralizado">
                    Nossos Valores
                </h2>
                <div className="cards-conecte">
                    <div className="card-conecte">
                        <img src={inovacao} alt="Inovação" className="card-img" />
                        <div className="titulo-card">INOVAÇÃO</div>
                        <p>
                            Crie treinos personalizados, gerencie seus alunos e transforme sua paixão pelo esporte em carreira digital.
                        </p>
                    </div>

                    <div className="card-conecte">
                        <img src={inclusao} alt="Inclusão" className="card-img" />
                        <div className="titulo-card">INCLUSÃO</div>
                        <p>
                            Aprenda com especialistas, acompanhe seu desempenho e evolua no seu esporte favorito de forma prática e divertida
                        </p>
                    </div>

                    <div className="card-conecte">
                        <img src={saude} alt="Saúde e Bem-estar" className="card-img" />
                        <div className="titulo-card">SAÚDE E BEM-ESTAR</div>
                        <p>
                            Conecte-se a comunidades esportivas, participe de desafios e mantenha-se motivado a cada conquista.
                        </p>
                    </div>
                </div>

                {/* Botões finais */}
                <div className="botoes-container" style={{ marginTop: "40px" }}>
                    <Link to="/professores" className="botao-link">
                        Para Professores
                    </Link>
                    <Link to="/alunos-praticantes" className="botao-link">
                        Para Alunos e Praticantes
                    </Link>
                </div>
            </div>
        </section>
    );
}