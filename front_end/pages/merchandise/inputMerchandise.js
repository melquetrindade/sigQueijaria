import React, { useState, useEffect } from "react";

export default function InputMerchandise({productId}) {
    const [supplier, setSupplier] = useState([]);
    // const [opc, setOpc] = useState("");
    const [inputMerchandise, setInputMerchandise] = useState({
        quantidade: "",
        codigo: "",
        ownerFornecedor: "",
        data: "",
        valor: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputMerchandise({ ...inputMerchandise, [name]: value });
    };

    useEffect(() => {
        // carregamento inicial dos employee
        async function fetchData() {
            try {
                const data = await fetch("http://127.0.0.1:8000/fornecedores/");
                const dataSupplier = await data.json();
                setSupplier(dataSupplier);
            } catch (error) {
                console.error("Erro ao carregar:", error);
            }
        }

        fetchData();
    }, []);

    // const changeQuantity = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         // Realiza uma busca pelo funcionário com o ID fornecido
    //         const response = await fetch(`http://127.0.0.1:8000/produtos/${key}`);
    //         const data = await response.json();
    //         console.log(data);
    
    //         if (!data) {
    //             console.error('Funcionário não encontrado.');
    //             return;
    //         }
    
    //         // Atualiza apenas o status do funcionário para false
    //         const updatedEmployee = {
    //             ...data,
    //             status: false // atualiza o status para false
    //         };
    
    //         const updateResponse = await fetch(`http://127.0.0.1:8000/produtos/${data.id}/`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(updatedEmployee),
    //         });
    
    //         if (!updateResponse.ok) {
    //             throw new Error('Erro ao atualizar status do funcionário');
    //         }
    
    //         const responseData = await updateResponse.json();
    //         console.log(responseData);
    
    //         // Limpa os campos após a atualização
    //         router.push('/employee/nav');
    //     } catch (error) {
    //         console.error('Erro ao atualizar status do funcionário:', error);
    //     }
    // };

    const handleSubmit = async (e) => {
        // esta função envia os dados do inputMerchandise para o back usando o método POST
        e.preventDefault();

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/entradasMercadorias/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputMerchandise),
                }
            );

            const data = await response.json(); // transforma a resposta em JSON
            console.log(data);

            setInputMerchandise({
                quantidade: "",
                codigo: "",
                ownerFornecedor: "",
                data: "",
                valor: "",
            });
        } catch (error) {
            console.error("Erro ao inserir inputMerchandise!", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-2/4 my-4 max-w-full p-3">
            <div className="shadow-lg shadow-slate-400 max-w-full">
                <h1 className="w-full text-center p-[10px] bg-gradient-to-bl from-[#09173E] via-[#03475B] to-[#084D6E]/75 text-white font-bold text-2xl">
                    Realizar Entrada de Mercadoria
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white px-6 py-5 flex flex-col w-[470px] max-w-full gap-2"
                >
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Quantidade: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 100"
                            type="text"
                            name="quantidade"
                            value={inputMerchandise.quantidade}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* <div className="flex flex-col justify-center gap-1">    NÃO SERIA MELHOR GERAR O CODIGO AUTOMATICAMENTE?
                        Definir os cargos existentes e trocar por um select
                        <label className="font-semibold">Codigo: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="codigo"
                            value={inputMerchandise.codigo}
                            onChange={handleChange}
                            required
                        />
                    </div> */}
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Fornecedor: </label>
                        <select
                            name="ownerFornecedor"
                            id="meuSelect"
                            value={inputMerchandise.ownerFornecedor}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Escolha o Fornecedor</option>
                            {supplier.map((supplier) => (
                                <option key={supplier.id} value={supplier.id}>
                                    {supplier.nome}
                                </option>
                            ))}
                        </select>
                        {/* <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 25000"
                            type="text"
                            name="salario"
                            value={inputMerchandise.fornecedor}
                            onChange={handleChange}
                            required
                        /> */}
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Data: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="date"
                            name="data"
                            value={inputMerchandise.data}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Valor: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 10"
                            type="number"
                            name="valor"
                            value={inputMerchandise.valor}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#03475B] hover:bg-[#084D6E]/95 rounded-md shadow-lg text-white font-semibold transition duration-200 mt-5"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}
