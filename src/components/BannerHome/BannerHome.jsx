import React from "react";
import './BannerHome.css';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import banner from '../../assets/bannertenis.jpg';
import { Link } from 'react-router-dom';

export default function BannerHome() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${banner})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Aprenda, ensine e pratique esportes como nunca antes.</h1>
                    <Link to="/cadastro-hub" className="botao-criar-conta">
                        Crie agora a sua conta
                    </Link>
                </div>
            </div>
            <Link to="/download" className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </Link>
        </div>
    );
}