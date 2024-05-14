import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function UpdateFornecedor () {
    const [key, setKey] = useState('');
    const [opc, setOpc] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [fornecedores, setFornecedores] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFornecedores(prevState => ({
            ...prevState,
            [name]: value
        }));
        
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // busca pelo fornecedor com o cnpj fornecido
            console.log(key, "");
            const response = await fetch(`http://127.0.0.1:8000/fornecedores/${key}`);
            const data = await response.json();
            console.log(data);
            if (data.length === 0) {
                console.error('Fornecedor não encontrado.');
                return;
            }
            
            // atualiza apenas os campos do fornecedor que foram alterados
            const UpdateFornecedor = {
                ...data,
                ...fornecedores
            };
            
            const updateResponse = await fetch(`http://127.0.0.1:8000/fornecedores/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UpdateFornecedor),
            });
    
            const responseData = await updateResponse.json();
            console.log(responseData);
        } catch (error) {
            console.error('Erro ao atualizar fornecedor:', error);
        }
        router.push('/supplier/nav');
    };
     
    const fieldNames = { // define os nomes dos campos para exibição
        cnpj: 'CNPJ',
        nome: 'Nome',
        email: 'E-mail',
        numTelefone: 'Número de Telefone',
        dataNascimento: 'Data de Nascimento',
    };
    
    const label = opc === 'cnpj' || opc === 'nome' ? opc.toUpperCase() : fieldNames[opc]; // label para exibição baseado na opção selecionada
    
    const Decision = () => {
        return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                    <label>{label}: </label>
                    <input type="text" name={opc} value={fornecedores[opc]} onBlur={handleChange} placeholder="Digite o novo dado"/>
                </div>
                <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Salvar</button>
            </form>
        );
    };
    
    return (
        <div>
            <h1>Atualizar Fornecedor</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do Fornecedor' />
            </div>
            <div>
                <label>Atualizar: </label>
                <select id='meuSelect' onChange={(e) => setOpc(e.target.value)}>
                    <option value="cnpj">CNPJ</option>
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