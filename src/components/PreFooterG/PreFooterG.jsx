import React from 'react';
import './PreFooterG.css';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import corrida from '../../assets/motivacao.jpg';
import qrCode from '../../assets/qrcode.png';

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
                    <button className="botao-criar-conta">Criar conta gratuita</button>
                    <p className="texto-download">Ou faça o download do app:</p>
                    <img src={qrCode} alt="QR Code do app" className="qrcode" />
                </div>
            </div>

            {/* Frase final e banner */}
            <div className="frase-final">
                <h3 className="frase-texto">Conecte-se. Evolua. Inspire.</h3>
                <div className="lojas">
                    <img src={lojasbanner} alt="App Stores" />
                </div>
            </div>
        </section>
    );
}