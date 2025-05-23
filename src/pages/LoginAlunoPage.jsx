import React, { useState } from "react";
import '../styles/LoginPage.css';
import { supabase } from '../supabaseClient';
import logoAluno from '../assets/logoaluno.png';
import { useNavigate } from "react-router-dom";

const LoginAlunoPage = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setMensagem('');

        if (!email || !senha) {
            setMensagem('Por favor, preencha e-mail e senha.');
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        });

        if (error) {
            setMensagem(`Erro no login: ${error.message}`);
            return;
        }

        if (data.user) {
            // Simulação: você pode usar um nome fixo ou pegar do email para criar um nome simples
            const nomeSimulado = "Conta Teste";

            // Salva no localStorage
            localStorage.setItem('usuario_nome', nomeSimulado);

            setMensagem('Login realizado com sucesso!');
            setTimeout(() => {
                navigate('/download');
            }, 1000);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src={logoAluno} alt="Logo Aluno" className="logo" />
                <h2 className="title">Portal do Aluno</h2>
                <p className="subtitle">Faça login para acompanhar seus treinos e seu progresso.</p>

                <input
                    type="email"
                    className="input-field"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button className="button" onClick={handleLogin}>ENTRAR</button>

                {mensagem && (
                    <p style={{ color: mensagem.includes('Erro') ? 'red' : 'green', marginTop: '10px' }}>
                        {mensagem}
                    </p>
                )}

                <p className="forgot-password">Esqueci minha senha</p>
                <p className="language-selector">🌐 Português - BR</p>
            </div>
        </div>
    );
};

export default LoginAlunoPage;