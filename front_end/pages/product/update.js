import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function UpdateProduct () {
    const [key, setKey] = useState('');
    const [opc, setOpc] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [produto, setProduct] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...produto, [opc]: value }); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // busca pelo produto com o código de barras fornecido
            console.log(key, "aqui");
            const response = await fetch(`http://127.0.0.1:8000/produtos/${key}`);
            const data = await response.json();
            console.log(data);
            if (data.length === 0) {
                console.error('Produto não encontrado.');
                return;
            }

            // atualiza apenas os campos do produto que foram alterados
            const updatedProduct = {
                ...data,
                ...produto
            };

            const updateResponse = await fetch(`http://127.0.0.1:8000/produtos/${data.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });

            const responseData = await updateResponse.json();
            console.log(responseData);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
        router.push('/Client/nav');
    };

    const fieldNames = { // define os nomes dos campos para exibição
        codigoBarras: 'Código de Barras',
        nome: 'Nome',
        tipo: 'Tipo',
        dataValidade: 'Data de Validade',
        qntMinima: 'Quantidade Mínima',
        quantidade: 'Quantidade',
        valor: 'Valor',
    };

    const label = opc === 'codigoBarras' || opc === 'nome' ? opc.toUpperCase() : fieldNames[opc]; // label para exibição baseado na opção selecionada

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
            <h1>Atualizar Produto</h1>
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