import React, { useState } from 'react';

export default function AddProduto () {
    const [produto, setProduto] = useState({
        codigoBarras: '',
        nome: '',
        tipo: '',
        dataValidade: '',
        qtdMinima: '',
        quantidade: '',
        valor: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => { // esta função envia os dados do produto para o back usando o método POST    
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:8000/produtos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });
    
            const data = await response.json(); // transforma a resposta em JSON
            console.log(data); 
    
            setProduto({
                codigoBarras: '',
                nome: '',
                tipo: '',
                dataValidade: '',
                qtdMinima: '',
                quantidade: '',
                valor: '',
                status: ''
            });
        } catch (error) {
            console.error('Erro ao inserir produto!', error);
        }
    };
    
    return (
        <div>
        <h2>Inserir Produto</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>CPF:</label>
                <input type="text" name="codigoBarras" value={produto.codigoBarras} onChange={handleChange} />
            </div>
            <div>
                <label>RG:</label>
                <input type="text" name="nome" value={produto.nome} onChange={handleChange} />
            </div>
            <div>
                <label>Nome:</label>
                <input type="text" name="tipo" value={produto.tipo} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="dataValidade" value={produto.dataValidade} onChange={handleChange} />
            </div>
            <div>
                <label>Número de Telefone:</label>
                <input type="text" name="qtdMinima" value={produto.qtdMinima} onChange={handleChange} />
            </div>
            <div>
                <label>Quantidade:</label>
                <input type="text" name="quantidade" value={produto.quantidade} onChange={handleChange} />
            </div>
            <div>
                <label>Valor:</label>
                <input type="text" name="valor" value={produto.valor} onChange={handleChange} />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" name="status" value={produto.status} onChange={handleChange} />
            </div>
                <button type="submit">Salvar Informações</button>
        </form>
        </div>
    );
};
