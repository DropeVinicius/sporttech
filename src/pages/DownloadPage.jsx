import React from "react";
import '../styles/DownloadPage.css'; // estilos separados
import logo from '../assets/logoaluno.png';
import qrCode from '../assets/qrcode.png';
import download from '../assets/Google Play e Apple.svg'; // botão imagem
import { Link } from 'react-router-dom';


const DownloadPage = () => {
    return (
        <div className="download-page">
            <div className="overlay"></div>
            <div className="download-card">
                {/* Logo clicável que redireciona para /home */}
                <Link to="/home">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <h2>Já possui seu Cadastro?</h2>
                <p>
                    Baixe agora o nosso aplicativo e acesse sua <br />conta para iniciar suas aulas e se divertir!
                </p>

                {/* Container com QR code à direita e botões à esquerda */}
                <div className="store-and-qr">
                    <div className="qr-container">
                        <img src={qrCode} alt="QR Code" className="qr-code" />
                    </div>
                    <div className="store-buttons">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src={download} alt="Google Play" />
                        </a>
                        
                    </div>
                </div>

                <Link to="/cadastro-hub" className="register-button">
                    CADASTRA-SE SE AINDA NÃO POSSUIR CONTA
                </Link>
            </div>
        </div>
    );
};

export default DownloadPage