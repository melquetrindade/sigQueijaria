import React, { useState, useEffect } from 'react';

export default function ReadClient () {
    const [fornecedores, setFornecedores] = useState([]); // armazena todos os fornecedores obtidos da API
    const [searchTerm, setSearchTerm] = useState(''); // armazena o termo de pesquisa inserido pelo adm
    const [searchResults, setSearchResults] = useState([]); // armazena os resultados da pesquisa

    useEffect(() => { // carregamento inicial dos fornecedores
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/fornecedores/');
                const data = await response.json();
                setFornecedores(data);
            } catch (error) {
                console.error('Erro ao carregar:', error);
            }
        }
        
        fetchData();
    }, []);

    useEffect(() => {  // atualização dinâmica dos resultados com base no searchTerm
        const results = fornecedores.filter(fornecedores =>
            fornecedores.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fornecedores.cnpj.includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm, fornecedores]);

    const handleSearch = (e) => { // atualiza o estado searchTerm com o valor inserido
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <h2>Consultar Fornecedores</h2>
            <input 
                type="text"
                placeholder="Nome ou CNPJ do fornecedor"
                value={searchTerm}
                onChange={handleSearch}
            />
            {searchTerm && (
                <ul>
                    {searchResults.map(fornecedores => (
                        <li key={fornecedores.id}>
                        <p>ID: {fornecedores.id}</p>
                        <p>Nome: {fornecedores.nome}</p>
                        <p>CNPJ: {fornecedores.cnpj}</p>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
