import React from 'react';
import '../styles/Cadastro.css';
import logo from '../assets/logoaluno.png'

const CadastroProfessor = () => {
    return (
        <div className="cadastro-container">
            <div className="side-stripes">
                <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                    <div className="faixa-verde"></div>
                    <div className="faixa-preta"></div>
                </div>
            </div>
            <div className="form-wrapper">
                <img src={logo} alt="Logo" className="logo-cadastro" />
                <h2>Crie sua conta como Professor</h2>
                <p>Compartilhe seu conhecimento, crie treinos e transforme vidas.</p>

                <input type="text" placeholder="Nome Completo" />
                <input type="text" placeholder="CPF" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme sua senha" />
                <input type="text" placeholder="Telefone" />
                <input type="text" placeholder="Link de portfólio" />

                <div class="input-group">
                <label className="label-select">Modalidade</label>
                <select>
                    <option disabled selected>Selecione</option>
                    <option>Musculação</option>
                    <option>Corrida</option>
                    <option>Yoga</option>
                </select>
                </div>
                <button className="botao-cadastrar">CADASTRAR</button>

                <p className="login-link">Já possui conta? <a href="/login-professor">Acesse agora.</a></p>
                <p className="recaptcha-text">Site protegido pelo reCAPTCHA.</p>
            </div>
        </div>
    );
};

export default CadastroProfessor;