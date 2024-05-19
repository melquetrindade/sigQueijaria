import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ReadProduto from './read';


export default function UpdateEmployee () {
    const [key, setKey] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Realiza uma busca pelo funcionário com o ID fornecido
            const response = await fetch(`http://127.0.0.1:8000/produtos/${key}`);
            const data = await response.json();
            console.log(data);
    
            if (!data) {
                console.error('Produto não encontrado.');
                return;
            }
    
            // Atualiza apenas o status do funcionário para false
            const updatedEmployee = {
                ...data,
                status: false // atualiza o status para false
            };
    
            const updateResponse = await fetch(`http://127.0.0.1:8000/produtos/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedEmployee),
            });
    
            if (!updateResponse.ok) {
                throw new Error('Erro ao atualizar status do produto');
            }
    
            const responseData = await updateResponse.json();
            console.log(responseData);
    
            // Limpa os campos após a atualização
            router.push('/product/nav');
        } catch (error) {
            console.error('Erro ao atualizar status do produto:', error);
        }
    };
    

    const CheckSubmission = () => {
        return(
            <div>
                <h1>Tem certeza de que quer excluir este produto?</h1>
                <button type='submit' onClick={handleSubmit} className='p-2 rounded-md bg-gray-950 text-white'>Sim, excluir!</button>
            </div>
        );
    }
    

    return (
        <div>
            <ReadProduto />
            <h1>Deletar Produto</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do produto'/>
            </div>
            <div>
            {showConfirmation ? <CheckSubmission /> : <button onClick={() => setShowConfirmation(true)} className='p-2 rounded-md bg-gray-950 text-white'>Deletar</button>}
        </div>
        </div>
    );

}