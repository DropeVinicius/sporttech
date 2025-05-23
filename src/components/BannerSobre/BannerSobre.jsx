import React from 'react';
import './BannerSobre.css';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import bannerinst from '../../assets/bannerinst.jpg';
import { Link } from 'react-router-dom';


export default function BannerSobre() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${bannerinst})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Conectar pessoas através do<br></br> esporte e da tecnologia.</h1>
                    <button className="botao-criar-conta">Crie sua conta agora</button>
                </div>
            </div>
            <Link to="/download" className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </Link>
        </div>
    );
}