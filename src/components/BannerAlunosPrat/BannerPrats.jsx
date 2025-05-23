import React from 'react';
import './BannerPrats.css';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import bannerprats from '../../assets/womanworkout.jpg';
import { Link } from 'react-router-dom';

export default function BannerPrats() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${bannerprats})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Aprenda, evolua e pratique com os melhores.</h1>
                    <Link to="/cadastro-praticante" className="botao-criar-conta">
                        Crie sua conta agora
                    </Link>
                </div>
            </div>
            <Link to="/download" className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </Link>
        </div>
    );
}