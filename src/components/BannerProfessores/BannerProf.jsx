import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link
import './BannerProf.css';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import bannerprof from '../../assets/bannerprof.png';

export default function BannerProf() {
    return (
        <div className="banner-home" style={{ backgroundImage: `url(${bannerprof})` }}>
            <div className="overlay">
                <div className="conteudo-banner">
                    <h1>Transforme sua paixão por esporte em carreira.</h1>
                    <Link to="/cadastro-professor" className="botao-criar-conta">
                        Seja um professor
                    </Link>
                </div>
            </div>
            <Link to="/download" className="lojas-banner">
                <img src={lojasbanner} alt="App Stores" />
            </Link>
        </div>
    );
}