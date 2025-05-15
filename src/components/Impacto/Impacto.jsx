import React from "react";
import "./Impacto.css";
import menworkout from "../../assets/menworkout.png";

export default function Impacto() {
    return (
        <section className="conecte-se">
            {/* Primeiro background com imagem */}
            <div className="conecte-banner" style={{ backgroundImage: `url(${menworkout})` }}>

                <div className="texto-banner">
                    <h2>
                        Na SportTech, você pode transformar sua<br />
                        experiência esportiva em <span className="verde">impacto real.</span>
                    </h2>
                    <button className="botao-gamificacao">
                        Saiba mais sobre a <strong>SportTech</strong>
                    </button>
                </div>
            </div>
        </section>
    );
}