import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ReadSupplier from './read';


export default function UpdateSupplier () {
    const [key, setKey] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Realiza uma busca pelo fornecedor com o ID fornecido
            const response = await fetch(`http://127.0.0.1:8000/fornecedores/${key}`);
            const data = await response.json();
            console.log(data);
    
            if (!data) {
                console.error('fornecedor não encontrado.');
                return;
            }
    
            // Atualiza apenas o status do fornecedor para false
            const updateSupplier = {
                ...data,
                status: false // atualiza o status para false
            };
    
            const updateResponse = await fetch(`http://127.0.0.1:8000/fornecedores/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateSupplier),
            });
    
            if (!updateResponse.ok) {
                throw new Error('Erro ao atualizar status do fornecedor');
            }
    
            const responseData = await updateResponse.json();
            console.log(responseData);
    
            // Limpa os campos após a atualização
            router.push('/supplier/nav');
        } catch (error) {
            console.error('Erro ao atualizar status do fornecedor:', error);
        }
    };
    

    const checkSubmission = () => {
        return(
            <div>
                <h1>Tem certeza de que quer excluir este fornecedor?</h1>
                <button type='submit' onClick={handleSubmit} className='p-2 rounded-md bg-gray-950 text-white'>Sim, excluir!</button>
            </div>
        );
    }
    

    return (
        <div>
            <ReadSupplier />
            <h1>Deletar Fornecedor</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do fornecedor'/>
            </div>
            <div>
            {showConfirmation ? checkSubmission() : <button onClick={() => setShowConfirmation(true)} className='p-2 rounded-md bg-gray-950 text-white'>Deletar</button>}
        </div>
        </div>
    );

}