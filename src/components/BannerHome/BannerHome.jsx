import React from "react";
import './BannerHome.css';
import lojasbanner from '../../assets/download.png';
import banner from '../../assets/bannertenis.jpg';

export default function BannerHome() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${banner})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Aprenda, ensine e pratique esportes como nunca antes.</h1>
                    <button className="botao-criar-conta">Crie agora a sua conta</button>
                </div>
            </div>
            <div className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </div>
        </div>
    );
}