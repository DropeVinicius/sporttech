import React from "react";
import "./ConecteSe.css";
import bannervolei from "../../assets/bannervolei.jpg";
import selo from "../../assets/selo.svg";
import beachtennis from "../../assets/beachtennis2.jpg";
import futebol from "../../assets/futebol.webp";
import basquete from "../../assets/basquete.png";

export default function ConecteSe() {
    return (
        <section className="conecte-se">
            {/* Primeiro background com imagem */}
            <div className="conecte-banner" style={{ backgroundImage: `url(${bannervolei})` }}>
                <img src={selo} alt="Selo" className="selo-sobreposto" />

                <div className="texto-banner">
                    <h2>
                        Conecte-se.<br />
                        Treine.<br />
                        Evolua no esporte com <span className="verde">motivação.</span>
                    </h2>
                    <button className="botao-gamificacao">
                        Saiba mais sobre a <strong>Gamificação</strong>
                    </button>
                </div>
            </div>

            {/* Segundo background sólido */}
            <div className="conecte-fundo">
                <h2 className="titulo-centralizado">
                    Para <span className="verde">quem</span> é o SporTech?
                </h2>

                <div className="cards-conecte">
                    <div className="card-conecte">
                        <img src={basquete} alt="Professor" className="card-img" />
                        <div className="titulo-card">Professor</div>
                        <p>
                            Crie treinos personalizados, gerencie seus alunos e transforme sua paixão pelo esporte em carreira digital.
                        </p>
                    </div>

                    <div className="card-conecte">
                        <img src={beachtennis} alt="Aluno" className="card-img" />
                        <div className="titulo-card">Aluno</div>
                        <p>
                            Aprenda com especialistas, acompanhe seu desempenho e evolua no seu esporte favorito de forma prática e divertida
                        </p>
                    </div>

                    <div className="card-conecte">
                        <img src={futebol} alt="Entusiasta" className="card-img" />
                        <div className="titulo-card">Praticante</div>
                        <p>
                            Conecte-se a comunidades esportivas, participe de desafios e mantenha-se motivado a cada conquista.
                        </p>
                    </div>
                </div>
            </div>
            <div className="faixa-preta">
                <p>
                    O SporTech foi criado para quem respira esporte e quer evoluir com tecnologia. Seja você professor, aluno ou praticante, aqui é o seu lugar para crescer, conectar e conquistar novos limites.
                </p>
            </div>
        </section>
    );
}