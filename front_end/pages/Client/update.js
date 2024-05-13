import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function UpdateClient () {
    const [key, setKey] = useState('');
    const [opc, setOpc] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [cliente, setClient] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...cliente, [opc]: value }); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // busca pelo cliente com o CPF fornecido
            console.log(key, "aqui");
            const response = await fetch(`http://127.0.0.1:8000/clientes/${key}`);
            const data = await response.json();
            console.log(data);
            if (data.length === 0) {
                console.error('Cliente não encontrado.');
                return;
            }
            
            // atualiza apenas os campos do cliente que foram alterados
            const updatedClient = {
                ...data,
                ...cliente
            };
            
            const updateResponse = await fetch(`http://127.0.0.1:8000/clientes/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedClient),
            });
    
            const responseData = await updateResponse.json();
            console.log(responseData);
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
        }
        router.push('/Client/nav');
    };
     
    const fieldNames = { // define os nomes dos campos para exibição
        cpf: 'CPF',
        rg: 'RG',
        nome: 'Nome',
        email: 'E-mail',
        numTelefone: 'Número de Telefone',
        dataNascimento: 'Data de Nascimento',
    };
    
    const label = opc === 'cpf' || opc === 'rg' ? opc.toUpperCase() : fieldNames[opc]; // label para exibição baseado na opção selecionada
    
    const Decision = () => {
        return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                    <label>{label}: </label>
                    <input type="text" name={opc} value={cliente[opc]} onChange={handleChange} placeholder="Digite o novo dado"/>
                </div>
                <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Salvar</button>
            </form>
        );
    };
    
    return (
        <div>
            <h1>Atualizar Cliente</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do cliente'/>
            </div>
            <div>
                <label>Atualizar: </label>
                <select id='meuSelect' onChange={(e) => setOpc(e.target.value)}>
                    <option value="cpf">CPF</option>
                    <option value="rg">RG</option>
                    <option value="nome">Nome</option>
                    <option value="email">E-mail</option>
                    <option value="numTelefone">Número de Telefone</option>
                    <option value="dataNascimento">Data de Nascimento</option>
                </select>
            </div>

            {showConfirmation ? <Decision /> : <button onClick={() => setShowConfirmation(true)} className='p-2 rounded-md bg-gray-950 text-white'>Continuar</button>}
                {/* {decision && showConfirmation} */}
        </div>
    );
}