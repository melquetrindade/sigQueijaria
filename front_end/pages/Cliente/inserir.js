import React, { useState } from 'react';
import { useRouter } from "next/router";

export default function InserirCliente () {
    const [cliente, setCliente] = useState({
        cpf: '',
        rg: '',
        nome: '',
        email: '',
        numTelefone: '',
        status: '',
        dataNascimento: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:8000/clientes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });
    
            const data = await response.json(); // Transforma a resposta em JSON
            console.log(data); // Log do resultado da inserção
    
            // Limpar o formulário após a inserção bem-sucedida
            setCliente({
                cpf: '',
                rg: '',
                nome: '',
                email: '',
                numTelefone: '',
                status: '',
                dataNascimento: ''
            });
        } catch (error) {
            console.error('Erro ao inserir cliente!', error);
        }
    };
    
    return (
        <div>
        <h2>Inserir Cliente</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>CPF:</label>
                <input type="text" name="cpf" value={cliente.cpf} onChange={handleChange} />
            </div>
            <div>
                <label>RG:</label>
                <input type="text" name="rg" value={cliente.rg} onChange={handleChange} />
            </div>
            <div>
                <label>Nome:</label>
                <input type="text" name="nome" value={cliente.nome} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={cliente.email} onChange={handleChange} />
            </div>
            <div>
                <label>Número de Telefone:</label>
                <input type="text" name="numTelefone" value={cliente.numTelefone} onChange={handleChange} />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" name="status" value={cliente.status} onChange={handleChange} />
            </div>
            <div>
                <label>Data de Nascimento:</label>
                <input type="date" name="dataNascimento" value={cliente.dataNascimento} onChange={handleChange} />
            </div>
                <button type="submit">Salvar</button>
        </form>
        </div>
    );
};

