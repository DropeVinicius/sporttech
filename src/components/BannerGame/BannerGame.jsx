import React from 'react';
import './BannerGame.css';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import corrida from '../../assets/corridabackground.jpg';
import { Link } from 'react-router-dom';

export default function BannerGame() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${corrida})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Conquiste.<br></br>Evolua.<br></br>Supere-se.</h1>
                    <Link to="/cadastro-hub" className="botao-criar-conta">
                        Crie agora a sua conta
                    </Link>
                </div>
            </div>
            <div className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </div>
        </div>
    );
}