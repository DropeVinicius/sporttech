import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const SupabaseTest = () => {
    const [dados, setDados] = useState([]);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('tabela_exemplo') // substitua pelo nome real da sua tabela
                .select('*');

            if (error) {
                setErro(error.message);
            } else {
                setDados(data);
            }
        };

        fetchData();
    }, []);

    const inserirDado = async () => {
        const { data, error } = await supabase
            .from('tabela_exemplo') // substitua pelo nome real
            .insert([{ nome: 'João', idade: 30 }]);

        if (error) {
            setErro(error.message);
        } else {
            alert('Dado inserido com sucesso!');
            setDados(prev => [...prev, ...data]);
        }
    };

    return (
        <div>
            <h2>Testando Supabase</h2>
            {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
            <button onClick={inserirDado}>Inserir João</button>
            <ul>
                {dados.map((item, index) => (
                    <li key={index}>
                        {item.nome} - {item.idade}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupabaseTest;
