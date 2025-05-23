import React, { useState, useEffect } from "react";
import '../styles/DownloadPage.css';
import logo from '../assets/logoaluno.png';
import qrCode from '../assets/qrcode.png';
import download from '../assets/Google Play e Apple.svg';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const DownloadPage = () => {
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('usuario_nome');
        if (nomeSalvo) {
            setNome(nomeSalvo);
            return;
        }

        const fetchUserProfile = async () => {
            const { data: { user }, error: userError } = await supabase.auth.getUser();
            if (userError || !user) {
                console.error('Sessão expirada ou erro:', userError?.message);
                navigate('/login-aluno');
                return;
            }

            // Tente buscar perfil pelo user_id
            const { data, error } = await supabase
                .from('user')
                .select('nome')
                .eq('user_id', user.id) // normalmente se usa user_id para relacionar
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    // Nenhum perfil encontrado — cria novo perfil com user_id e nome padrão
                    const nomePadrao = user.email?.split('@')[0] || 'Usuário';

                    const { error: insertError } = await supabase
                        .from('user')
                        .insert([{ user_id: user.id, nome: nomePadrao }]);

                    if (insertError) {
                        console.error('Erro ao criar perfil:', insertError.message);
                        return;
                    }

                    setNome(nomePadrao);
                    localStorage.setItem('usuario_nome', nomePadrao);
                    return; // sai aqui para evitar continuar a execução
                } else {
                    console.error('Erro ao buscar perfil:', error.message);
                    return;
                }
            }

            if (data?.nome) {
                setNome(data.nome);
                localStorage.setItem('usuario_nome', data.nome);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    return (
        <div className="download-page">
            <div className="overlay"></div>
            <div className="download-card">

                <Link to="/home">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>

                {nome && <p className="user-name">Olá, {nome}!</p>}

                <h2>Já possui seu Cadastro?</h2>
                <p>
                    Baixe agora o nosso aplicativo e acesse sua <br />conta para iniciar suas aulas e se divertir!
                </p>

                <div className="store-and-qr">
                    <div className="qr-container">
                        <img src={qrCode} alt="QR Code" className="qr-code" />
                    </div>
                    <div className="store-buttons">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={download} alt="Google Play e Apple Store" />
                        </a>
                    </div>
                </div>

                <Link to="/cadastro-hub" className="register-button">
                    CADASTRE-SE SE AINDA NÃO POSSUIR CONTA
                </Link>
            </div>
        </div>
    );
};

export default DownloadPage;