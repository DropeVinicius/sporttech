import React from 'react';
import '../styles/Cadastro.css';
import logo from '../assets/logoaluno.png'

const CadastroAluno = () => {
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
                <h2>Crie sua conta como Aluno</h2>
                <p>Aprenda com os melhores e alcance seu próximo nível.</p>

                <input type="text" placeholder="Nome Completo" />
                <input type="text" placeholder="CPF" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme sua senha" />
                <input type="text" placeholder="Telefone" />
                <input type="text" placeholder="Estado" />

                <div class="input-group">
                    <label className="label-select">Modalidade de Interesse</label>
                    <select>
                        <option disabled selected>Selecione</option>
                        <option>Beach Tennis</option>
                        <option>Vôlei de Praia</option>
                        <option>Futevôlei</option>
                        <option>Musculação</option>
                        <option>Corrida</option>
                        <option>Muay Thai</option>
                        <option>Yoga</option>
                    </select>
                </div>
                <button className="botao-cadastrar">CADASTRAR</button>

                <p className="login-link">Já possui conta? <a href="/login-aluno">Acesse agora.</a></p>
                <p className="recaptcha-text">Site protegido pelo reCAPTCHA.</p>
            </div>
        </div>
    );
};

export default CadastroAluno;