import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function UpdateProduct () {
    const [key, setKey] = useState('');
    const [opc, setOpc] = useState('');
    const router = useRouter();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [product, setProduct] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            console.log(key, "aqui");
            const response = await fetch(`http://127.0.0.1:8000/produtos/${key}`);
            const data = await response.json();
            console.log(data);
            if (data.length === 0) {
                console.error('produto não encontrado.');
                return;
            }
            
            const updatedProduct = {
                ...data,
                ...product
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
        router.push('/product/nav');
    };

    const fieldNames = { // define os nomes dos campos para exibição
        codigoBarras: "Código de Barras",
        nome: "Nome",
        tipo: "Tipo",
        dataValidade: "Data de Validade",
        qtdMinima: "Quantidade Mínima",
        quantidade: "Quantidade",
        valor: "Valor",
    };
    
    const label = opc === 'codigoBarras' || opc === 'nome' ? opc.toUpperCase() : fieldNames[opc];
    
    const Decision = () => {
            return(
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div>
                        <label>{label}: </label>
                        <input type="text" name={opc} value={product[opc]} onBlur={handleChange} placeholder='Digite o novo dado'/>
                    </div>
                    <button type="submit" className="bg-slate-800 text-white p-2 rounded-md">Salvar</button>
                </form>
            );
    }
    // const [showButton, setShowButton] = useState(true);

    // const onClickButton = () => {
    //     // setShowConfirmation(true);
    //     setShowButton(false);
    // }

    console.log(opc)
    return (
        <div>
            <h1>Atualizar Produto</h1>
            <div>
                <label>ID: </label>
                <input type="text" name="id" onChange={(e) => setKey(e.target.value)} placeholder='Digite o ID do produto'/>
            </div>
            <div>
                <label>Atualizar: </label>
                <select id='meuSelect' onChange={(e) => setOpc(e.target.value)}>
                    <option value="" disabled hidden>O que atualizar?</option>
                    <option value="codigoBarras">Código de Barras</option>
                    <option value="nome">Nome</option>
                    <option value="tipo">Tipo</option>
                    <option value="dataValidade">Data de Validade</option>
                    <option value="qtdMinima">Quantidade Mínima</option>
                    <option value="quantidade">Quantidade</option>
                    <option value="valor">Valor</option>
                </select>
            </div>
            {opc && <Decision />}
            {/* {showButton && <button onClick={onClickButton} className='p-2 rounded-md bg-gray-950 text-white'>Continuar</button>}
            {showConfirmation && <Decision />} */}
            {/* {showConfirmation ? <Decision /> : <button onClick={() => setShowConfirmation(true)} className='p-2 rounded-md bg-gray-950 text-white'>Continuar</button>} */}

        </div>
    );

}