import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ReadClient from './read';

export default function DeleteClient () {
    const [key, setKey] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // busca o cliente através do ID fornecido
            const response = await fetch(`http://127.0.0.1:8000/clientes/${key}`);
            const data = await response.json();
            console.log(data);
    
            if (!data) {
                console.error('Cliente não encontrado.');
                return;
            }
    
            // atualiza o status do cliente para false
            const updatedClient = {
                ...data,
                status: false 
            };
    
            const updateResponse = await fetch(`http://127.0.0.1:8000/clientes/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedClient),
            });
    
            if (!updateResponse.ok) {
                throw new Error('Erro ao atualizar status do cliente');
            }
    
            const responseData = await updateResponse.json();
            console.log(responseData);
    
            // limpa os campos após a atualização
            router.push('/Client/nav');
        } catch (error) {
            console.error('Erro ao atualizar status do cliente:', error);
        }
    };  

    const checkSubmission = () => {
        return(
            <div>
                <h1>Tem certeza que deseja desativar este cliente do sistema?</h1>
                <button type='submit' onClick={handleSubmit} className='p-2 rounded-md bg-gray-950 text-white'>Sim, desativar!</button>
            </div>
        );
    }
    
    return (
        <div>
            <ReadClient />
            <h1>Desativar Cliente</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do cliente'/>
            </div>
            <div>
            {showConfirmation ? checkSubmission() : <button onClick={() => setShowConfirmation(true)} className='p-2 rounded-md bg-gray-950 text-white'>Desativar</button>}
        </div>
        </div>
    );

}