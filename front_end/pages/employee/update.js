import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function UpdateEmployee () {
    const [key, setKey] = useState('');
    const [opc, setOpc] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [employee, setEmployee] = useState({});

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
            // setEmployee({
            //     cargo: '',
            //     salario: '',
            //     cargaHoraria: '',
            //     nome: '',
            //     email: '',
            //     numTelefone: '',
            // });
        } catch (error) {
            console.error('Erro ao atualizar funcionário:', error);
        }
        router.push('/employee/nav');
    };

    
    const Decision = () =>{
        return(
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                    <label>Cargo: </label>
                    <input type="text" name={opc} value={employee[opc]} onBlur={handleChange} placeholder='Digite o novo dado'/>
                </div>
                <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Salvar</button>
            </form>
        );
    }

    
    return (
        <div>
            <h1>Atualizar Funcionário</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do funcionário'/>
            </div>
            <div>
                <label>Atualizar: </label>
                <select id='meuSelect' onChange={(e) => setOpc(e.target.value)}>
                    <option value="cargo">Cargo</option>
                    <option value="salario">Salário</option>
                    <option value="nome">Nome</option>
                    <option value="cargaHoraria">Carga Horária</option>
                    <option value="email">E-mail</option>
                    <option value="numTelefone">Número de Telefone</option>
                </select>
            </div>
            {showConfirmation ? <Decision /> : <button onClick={() => setShowConfirmation(true)} className='p-2 rounded-md bg-gray-950 text-white'>Continuar</button>}
                {/* {decision && showConfirmation} */}
            {/* <div>

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
                    <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Salvar</button> */}
        </div>
    );

}