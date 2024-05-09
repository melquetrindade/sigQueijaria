import React, { useState, useEffect } from 'react';

export default function UpdateEmployee () {
    const [key, setKey] = useState('');
    // const [employee, setEmployee] = useState([]);

    // useEffect(() => { // carregamento inicial dos employee
    //     async function fetchData() {
    //         try {
    //             const response = await fetch(`http://127.0.0.1:8000/funcionarios/${key}`);
    //             console.log(key)
    //             const data = await response.json();
    //             setEmployee(data);
    //         } catch (error) {
    //             console.error('Erro ao carregar:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
            // const updateResponse = await fetch(`http://127.0.0.1:8000/funcionarios/${employee.id}/`, {
            //     method: 'DELETE',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(''),
            // });
    
            // const responseData = await updateResponse.json();
            // console.log(responseData);
            try {
                // Realiza uma busca pelo funcionário com o CPF fornecido
                console.log(key, "aqui");
                const response = await fetch(`http://127.0.0.1:8000/funcionarios/${key}`);
                const data = await response.json();
                console.log(data);
                if (data.length === 0) {
                    console.error('Funcionário não encontrado.');
                    return;
                }
                
                // const employeeToUpdate = data; // Supondo que apenas um funcionário corresponde ao CPF fornecido
                
                // Atualiza apenas os campos do funcionário que foram alterados
        
                const updateResponse = await fetch(`http://127.0.0.1:8000/funcionarios/${data.id}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(''),
                });
        
                const responseData = await updateResponse.json();
                console.log(responseData);
        
                // Limpa os campos após a atualização
            } catch (error) {
                console.error('Erro ao atualizar funcionário:', error);
            }
    
            // Limpa os campos após a atualização
    };
    

    return (
        <div>
            <h1>Deletar Funcionário</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do funcionário'/>
            </div>
            <div>
            <h2>Lista de Funcionários</h2>
            {/* <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            CPF
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cargo
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Salário
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Carga Horária
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nome
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Número de Telefone
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Data de Nascimento
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {employee.map(employee => (
                        <tr key={employee.cpf}>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.cpf}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.cargo}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.salario}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.cargaHoraria}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.nome}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.numTelefone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{employee.dataNascimento}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <button type='submit' onClick={handleSubmit} className='p-2 rounded-md bg-gray-950 text-white'>Deletar</button>
        </div>
        </div>
    );

}