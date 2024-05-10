import React, { useState } from 'react';

export default function AddEmployee () {
    const [employee, setEmployee] = useState({
        cpf: '',
        cargo: '',
        salario: '',
        cargaHoraria: '',
        nome: '',
        email: '',
        numTelefone: '',
        dataNascimento: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => { // esta função envia os dados do employee para o back usando o método POST    
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:8000/funcionarios/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),
            });
    
            const data = await response.json(); // transforma a resposta em JSON
            console.log(data); 
      
            setEmployee({
                cpf: '',
                cargo: '',
                salario: '',
                cargaHoraria: '',
                nome: '',
                email: '',
                numTelefone: '',
                dataNascimento: '',
            });
        } catch (error) {
            console.error('Erro ao inserir employee!', error);
        }
    };

    return (
        <div>
        <h1>Inserir Funcionário</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
                <label>CPF: </label>
                <input type="text" name="cpf" value={employee.cpf} onChange={handleChange} />
            </div>
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
            <div>
                <label>Data de Nascimento: </label>
                <input type="date" name="dataNascimento" value={employee.dataNascimento} onChange={handleChange} />
            </div>
                <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Salvar</button>
        </form>
        </div>
    );
};
