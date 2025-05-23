import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from '../assets/logoaluno.png';
import '../styles/Cadastro.css';

const CadastroAluno = () => {
    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        telefone: '',
        estado: '',
        modalidade: ''
    });

    const [mensagem, setMensagem] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        setMensagem('');

        if (!form.nome || !form.email || !form.senha) {
            setMensagem('Por favor, preencha nome, e-mail e senha.');
            return;
        }

        if (form.senha !== form.confirmarSenha) {
            setMensagem('As senhas não coincidem.');
            return;
        }

        // 1. Cadastrar no Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: form.email,
            password: form.senha,
        });

        if (authError) {
            console.error(authError);
            setMensagem(`Erro ao cadastrar: ${authError.message}`);
            return;
        }

        const userId = authData?.user?.id;

        if (!userId) {
            setMensagem('Não foi possível obter o ID do usuário.');
            return;
        }

        // 2. Inserir dados adicionais na tabela user
        const { error: insertError } = await supabase
            .from('user')
            .insert([{
                id: userId,
                nome: form.nome,
                email: form.email,
                tipo: 'aluno'
            }]);

        if (insertError) {
            console.error(insertError);
            setMensagem(`Erro ao salvar dados adicionais: ${insertError.message}`);
        } else {
            setMensagem('Cadastro realizado com sucesso!');
            setForm({
                nome: '',
                email: '',
                senha: '',
                confirmarSenha: '',
                telefone: ''
            });
        }
    };

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

                <input type="text" name="nome" placeholder="Nome Completo" value={form.nome} onChange={handleChange} />
                <input type="text" name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} />
                <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
                <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} />
                <input type="password" name="confirmarSenha" placeholder="Confirme sua senha" value={form.confirmarSenha} onChange={handleChange} />
                <input type="text" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
                <input type="text" name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} />

                <div className="input-group">
                    <label className="label-select">Modalidade de Interesse</label>
                    <select name="modalidade" value={form.modalidade} onChange={handleChange}>
                        <option disabled value="">Selecione</option>
                        <option>Beach Tennis</option>
                        <option>Vôlei de Praia</option>
                        <option>Futevôlei</option>
                        <option>Musculação</option>
                        <option>Corrida</option>
                        <option>Muay Thai</option>
                        <option>Yoga</option>
                    </select>
                </div>

                <button className="botao-cadastrar" onClick={handleSubmit}>CADASTRAR</button>
                {mensagem && <p style={{ color: mensagem.includes('Erro') ? 'red' : 'green' }}>{mensagem}</p>}

                <p className="login-link">Já possui conta? <a href="/login-aluno">Acesse agora.</a></p>
                <p className="recaptcha-text">Site protegido pelo reCAPTCHA.</p>
            </div>
        </div>
    );
};

export default CadastroAluno;