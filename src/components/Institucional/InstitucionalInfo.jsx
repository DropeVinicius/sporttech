import React from "react";
import "./InstitucionalInfo.css";
import peoplesmile from "../../assets/peoplesmile.avif";
import runningpeople from "../../assets/runningpeople.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function InstitucionalInfo() {
    return (
        <section className="institucional-bg">
            <div className="institucional-container">
                <div className="info-bloco">
                    <div className="info-texto">
                        <h2>
                            A principal plataforma digital<br />
                            de aprendizado esportivo:<br />
                            essa é a <span className="destaque">SportTech!</span>
                        </h2>
                        <p>
                            Nascemos com o propósito de democratizar o acesso ao esporte. Percebemos que muitos talentos e paixões ficavam escondidos pela falta de oportunidade – <strong>por isso, criamos uma plataforma que aproxima quem quer ensinar e quem quer aprender, com tecnologia, propósito e espírito de equipe.</strong>
                        </p>
                    </div>
                    <img src={peoplesmile} alt="Pessoas sorrindo" className="img-borda" />
                </div>

                <div className="info-bloco">
                    <img src={runningpeople} alt="Pessoas correndo" className="img-borda" />
                    <div className="info-texto">
                        <h2>
                            A SportTech existe para conectar pessoas através do esporte e da tecnologia.
                        </h2>
                        <p>
                            Nossa missão é tornar o aprendizado esportivo acessível, moderno e motivador — promovendo saúde, inclusão e evolução por meio de conexões reais, treinos inteligentes e gamificação.
                        </p>
                    </div>
                </div>

                <div className="info-footer">
                    <h3>Vamos juntos além do treino?</h3>
                    <p>Conecte-se com a gente nas redes sociais!</p>
                    <div className="redes-sociais">
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaLinkedinIn /></a>
                        <a href=""><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}