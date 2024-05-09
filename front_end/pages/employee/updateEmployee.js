import React, { useState, useEffect } from 'react';

export default function UpdateEmployee () {
    const [key, setKey] = useState('');
    const [employee, setEmployee] = useState({
        cargo: '',
        salario: '',
        cargaHoraria: '',
        nome: '',
        email: '',
        numTelefone: '',
    });
    // useEffect(() => { // carregamento inicial dos employee
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('http://127.0.0.1:8000/funcionarios/');
    //             const data = await response.json();
    //             setEmployee(data);
    //         } catch (error) {
    //             console.error('Erro ao carregar:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
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
            const updatedEmployee = {
                ...data,
                ...employee
            };
    
            const updateResponse = await fetch(`http://127.0.0.1:8000/funcionarios/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedEmployee),
            });
    
            const responseData = await updateResponse.json();
            console.log(responseData);
    
            // Limpa os campos após a atualização
            setEmployee({
                cargo: '',
                salario: '',
                cargaHoraria: '',
                nome: '',
                email: '',
                numTelefone: '',
            });
        } catch (error) {
            console.error('Erro ao atualizar funcionário:', error);
        }
    };
    

    return (
        <div>
            <h1>Atualizar Funcionário</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do funcionário'/>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                    <label>Cargo: </label>
                    <input type="text" name="cargo" value={employee.cargo} onChange={handleChange} />
                </div>
                <div>
                    <label>Salário: </label>
                    <input type="text" name="salario" value={employee.salario} onChange={handleChange} />
                </div>
                <div>
                    <label>Carga Horária: </label>
                    <input type="text" name="cargaHoraria" value={employee.cargaHoraria} onChange={handleChange} />
                </div>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" value={employee.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={employee.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Número de Telefone: </label>
                    <input type="tel" name="numTelefone" value={employee.numTelefone} onChange={handleChange} />
                </div>
                    <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Salvar</button>
            </form>
        </div>
    );

}