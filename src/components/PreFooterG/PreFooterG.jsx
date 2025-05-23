import React from 'react';
import './PreFooterG.css';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import corrida from '../../assets/motivacao.jpg';
import qrCode from '../../assets/qrcode.png';
import { Link } from 'react-router-dom';

export default function PreFooterG() {
    return (
        <section className="pre-footer-section">
            <div className="cards-container">
                {/* Card da imagem à esquerda */}
                <div className="card-imagem">
                    <img src={corrida} alt="Imagem motivacional" />
                </div>

                {/* Card com fundo preto e conteúdo */}
                <div className="card-conteudo">
                    <p className="texto-jornada">
                        Comece agora sua jornada esportiva com diversão e propósito.
                    </p>
                    <Link to="/cadastro-hub" className="botao-criar-conta">
                        Crie sua conta agora
                    </Link>
                    <p className="texto-download">Ou faça o download do app:</p>
                    <img src={qrCode} alt="QR Code do app" className="qrcode" />
                </div>
            </div>

            {/* Frase final e banner */}
            <div className="frase-final">
                <h3 className="frase-texto">Conecte-se. Evolua. Inspire.</h3>
                <Link to="/download" className="lojas">
                    <img src={lojasbanner} alt="App Stores" />
                </Link>
            </div>
        </section>
    );
}