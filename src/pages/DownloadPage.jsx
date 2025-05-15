import React from "react";
import '../styles/DownloadPage.css'; // estilos separados
import logo from '../assets/logoaluno.png';
import qrCode from '../assets/qrcode.png';
import googlePlay from '../assets/googleplay.png'; // botão imagem
import appStore from '../assets/appstore.png';   // botão imagem

const DownloadPage = () => {
    return (
        <div className="download-page">
            <div className="overlay"></div>
            <div className="download-card">
                <img src={logo} alt="Logo" className="logo" />
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
                        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={googlePlay} alt="Google Play" />
                        </a>
                        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                            <img src={appStore} alt="App Store" />
                        </a>
                    </div>
                </div>

                <button className="register-button">
                    CADASTRA-SE SE AINDA NÃO POSSUIR CONTA
                </button>
            </div>
        </div>
    );
};

export default DownloadPage