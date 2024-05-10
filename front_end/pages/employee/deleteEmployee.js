import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ReadEmployee from './read';


export default function UpdateEmployee () {
    const [key, setKey] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Realiza uma busca pelo funcionário com o ID fornecido
            const response = await fetch(`http://127.0.0.1:8000/funcionarios/${key}`);
            const data = await response.json();
            console.log(data);
    
            if (!data) {
                console.error('Funcionário não encontrado.');
                return;
            }
    
            // Atualiza apenas o status do funcionário para false
            const updatedEmployee = {
                ...data,
                status: false // atualiza o status para false
            };
    
            const updateResponse = await fetch(`http://127.0.0.1:8000/funcionarios/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedEmployee),
            });
    
            if (!updateResponse.ok) {
                throw new Error('Erro ao atualizar status do funcionário');
            }
    
            const responseData = await updateResponse.json();
            console.log(responseData);
    
            // Limpa os campos após a atualização
            router.push('/employee/nav');
        } catch (error) {
            console.error('Erro ao atualizar status do funcionário:', error);
        }
    };
    

    const checkSubmission = () => {
        return(
            <div>
                <h1>Tem certeza de que quer excluir este funcionário?</h1>
                <button type='submit' onClick={handleSubmit} className='p-2 rounded-md bg-gray-950 text-white'>Sim, excluir!</button>
            </div>
        );
    }
    

    return (
        <div>
            <ReadEmployee />
            <h1>Deletar Funcionário</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do funcionário'/>
            </div>
            <div>
            {showConfirmation ? checkSubmission() : <button onClick={() => setShowConfirmation(true)} className='p-2 rounded-md bg-gray-950 text-white'>Deletar</button>}
        </div>
        </div>
    );

}