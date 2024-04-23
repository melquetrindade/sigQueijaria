import React, { useState } from 'react';
import axios from 'axios';

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
            const response = await axios.post('../../../back_end/api/api/clientes/', cliente); // rota para inserir cliente
            console.log(response.data); // Log do resultado da inserção
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
        console.error('Erro ao inserir cliente:', error);
        }
    }

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
                <button type="submit">Inserir</button>
        </form>
        </div>
    );
};

