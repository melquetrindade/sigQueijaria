import React, { useState, useEffect } from 'react';

export default function ReadClient () {
    const [clientes, setClientes] = useState([]); // armazena todos os clientes obtidos da API
    const [searchTerm, setSearchTerm] = useState(''); // armazena o termo de pesquisa inserido pelo adm
    const [searchResults, setSearchResults] = useState([]); // armazena os resultados da pesquisa

    useEffect(() => { // carregamento inicial dos clientes
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/clientes/');
                const data = await response.json();
                setClientes(data);
            } catch (error) {
                console.error('Erro ao carregar:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {  // atualização dinâmica dos resultados com base no searchTerm
        const results = clientes.filter(cliente =>
            cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cliente.cpf.includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm, clientes]);

    const handleSearch = (e) => { // atualiza o estado searchTerm com o valor inserido
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <h2>Consultar Clientes</h2>
            <input 
                type="text"
                placeholder="Nome ou CPF do cliente"
                value={searchTerm}
                onChange={handleSearch}
            />
            {searchTerm && (
                <ul>
                    {searchResults.map(cliente => (
                        <li key={cliente.id}>
                        <p>ID: {cliente.id}</p>
                        <p>Nome: {cliente.nome}</p>
                        <p>CPF: {cliente.cpf}</p>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
