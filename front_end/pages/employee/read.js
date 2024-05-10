import React, { useState, useEffect } from 'react';

export default function ReadEmployee() {
    const [employee, setEmployee] = useState([]); // armazena todos os employee obtidos da API
    const [searchTerm, setSearchTerm] = useState(''); // armazena o termo de pesquisa inserido pelo adm
    const [searchResults, setSearchResults] = useState([]); // armazena os resultados da pesquisa

    useEffect(() => { // carregamento inicial dos employee
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/funcionarios/');
                const data = await response.json();
                setEmployee(data);
            } catch (error) {
                console.error('Erro ao carregar:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {  // atualização dinâmica dos resultados com base no searchTerm
        const results = employee.filter(employee =>
                (employee.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.cpf.includes(searchTerm)) && (employee.status == true)
        );
        setSearchResults(results);
    }, [searchTerm, employee]);

    const handleSearch = (e) => { // atualiza o estado searchTerm com o valor inserido
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <h2>Consultar employee</h2>
            <input 
                type="text"
                placeholder="Nome ou CPF do funcionário"
                value={searchTerm}
                onChange={handleSearch}
            />
            {searchTerm && (
                <ul>
                    {searchResults.map(employee => (
                        <li key={employee.id}>
                            <p>ID: {employee.id}</p>
                            <p>Nome: {employee.nome}</p>
                            <p>CPF: {employee.cpf}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
