import React, { useState, useEffect } from 'react';

export default function ReadProduto() {
    const [produtos, setProdutos] = useState([]); // armazena todos os produtos obtidos da API
    const [searchTerm, setSearchTerm] = useState(''); // armazena o termo de pesquisa inserido pelo adm
    const [searchResults, setSearchResults] = useState([]); // armazena os resultados da pesquisa

    useEffect(() => { // carregamento inicial dos produtos
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/produtos/');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao carregar:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {  // atualização dinâmica dos resultados com base no searchTerm
        const results = produtos.filter(produto =>
            produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            produto.codigoBarras.includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm, produtos]);

    const handleSearch = (e) => { // atualiza o estado searchTerm com o valor inserido
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <h2>Consultar Produtos</h2>
            <input 
                type="text"
                placeholder="Nome ou Código de barras"
                value={searchTerm}
                onChange={handleSearch}
            />
            {searchTerm && (
                <ul>
                    {searchResults.map(produto => (
                        <li key={produto.id}>
                            <p>Nome: {produto.nome}</p>
                            <p>CB: {produto.codigoBarras}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}