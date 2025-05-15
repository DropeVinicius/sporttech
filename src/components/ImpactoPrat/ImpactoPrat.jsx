import React from "react";
import "./ImpactoPrat.css";
import impactobanner from "../../assets/impactobanner.jpg";

export default function ImpactoPrat() {
    return (
        <section className="conecte-se">
            {/* Primeiro background com imagem */}
            <div className="conecte-banner" style={{ backgroundImage: `url(${impactobanner})` }}>

                <div className="texto-banner">
                    <h2>
                        Escolha seu esporte, encontre professores e<br />
                        treine de forma <span className="verde">divertida, motivadora e flexível.</span>
                    </h2>
                    <button className="botao-gamificacao">
                        Explore esportes agora
                    </button>
                </div>
            </div>
        </section>
    );
}