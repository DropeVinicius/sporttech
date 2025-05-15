import React from 'react';
import './BannerProf.css';
import lojasbanner from '../../assets/download.png';
import bannerprof from '../../assets/bannerprof.png';

export default function BannerProf() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${bannerprof})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Transforme sua paixão por esporte em carreira.</h1>
                    <button className="botao-criar-conta">Seja um professor</button>
                </div>
            </div>
            <div className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </div>
        </div>
    );
}