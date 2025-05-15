import React from 'react';
import './BannerPrats.css';
import lojasbanner from '../../assets/download.png';
import bannerprats from '../../assets/womanworkout.jpg';

export default function BannerPrats() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${bannerprats})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Aprenda, evolua e pratique com os melhores.</h1>
                    <button className="botao-criar-conta">Crie sua conta agora</button>
                </div>
            </div>
            <div className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </div>
        </div>
    );
}