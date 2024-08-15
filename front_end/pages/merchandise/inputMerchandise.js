import React, { useState, useEffect } from "react";
import RegisterMerchProduct from "./registerMerchandiseProduct";
import RegisterMerchPayment from "./registerMerchPayment";

export default function InputMerchandise({ productId }) {
    const [supplier, setSupplier] = useState([]);
    // const [merchandise, setMerchandise] = useState(null);
    const [productData, setProductData] = useState("");
    const [inputMerchandise, setInputMerchandise] = useState({
        quantidade: "",
        codigo: "",
        ownerFornecedor: "",
        data: "",
        valor: "",
    });
    const [payment, setPayment] = useState({
        metodo: "",
        valor: "",
    });

    // Pegando os valores "name" e "value" para formar o JSON
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputMerchandise({ ...inputMerchandise, [name]: value });
    };

    // const handleRadioChange = (e) => {
    //     const { name, value } = e.target;
    //     setPayment({ ...payment, [name]: value });
    // };

    useEffect(() => {
        // Carregando os dados dos fornecedores
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

    useEffect(() => {
        // Carregando os dados dos produtos pelo ID para atualizar a quantidade
        async function fetchDataProduct() {
            try {
                const getProductDataById = await fetch(
                    `http://127.0.0.1:8000/produtos/${productId}/`
                );
                const productDataById = await getProductDataById.json();
                setProductData(productDataById);
            } catch (error) {
                console.error("Erro ao carregar:", error);
            }
        }

        fetchDataProduct();
    }, []);

    // async function fetchDataMerchandise() {
    //     try {
    //         const dataMerch = await fetch(
    //             "http://127.0.0.1:8000/entradasMercadorias/"
    //         );
    //         const dataMerchandise = await dataMerch.json();
    //         console.log(dataMerchandise);

    //         const lastMerchandise = dataMerchandise[dataMerchandise.length - 1];
    //         const lastMerchandiseId = lastMerchandise.id;
    //         setMerchandise(lastMerchandiseId);
    //         console.log("ID da última entrada:", merchandise);
    //         // if (dataMerchandise.length > 0) {
    //         //     // Encontra a entrada de mercadoria com o maior ID
    //         //     // console.log("ID da última entrada:", lastMerchandise.id);
    //         // }
    //     } catch (error) {
    //         console.error("Erro ao carregar:", error);
    //     }
    // }

    const handleSubmit = async (e) => {
        // Esta função envia os dados do inputMerchandise para o back usando o método POST
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

            const newValue = parseInt(inputMerchandise.quantidade) * (parseInt(inputMerchandise.valor)/2);
            const responsePayment = await fetch(
                "http://127.0.0.1:8000/metodosPagamentos/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({metodo: payment, valor: newValue}),
                }
            );

            // console.log(inputMerchandise.quantidade);
            // newQuantity vai somar a quantidade já existente no banco de dados com a nova quantidade a ser inserida
            const newQuantity =
                parseInt(productData.quantidade) +
                parseInt(inputMerchandise.quantidade);
            const updatedProductQuantity = {
                ...productData,
                quantidade: newQuantity,
            };

            // Essa parte atualiza na tabela de Produtos o atributo "quantidade"
            const updateResponse = await fetch(
                `http://127.0.0.1:8000/produtos/${productId}/`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedProductQuantity),
                }
            );

            // const lastId = await fetchDataMerchandise();

            if ((response.status == 200 || response.status == 201) && (responsePayment.status == 200 || responsePayment.status == 201)) {
                // const dataSaved = await merchandiseProduct.json();
                const data = await response.json(); // transforma a resposta em JSON
                const dataUpdated = await updateResponse.json();
                const dataPayment = await responsePayment.json();
                RegisterMerchProduct(productId);
                RegisterMerchPayment(payment);
                console.log(data);
                console.log(dataUpdated);
                console.log(dataPayment);
                // console.log(dataSaved);

                setInputMerchandise({
                    quantidade: "",
                    codigo: "",
                    ownerFornecedor: "",
                    data: "",
                    valor: "",
                });
            } else {
                console.log(response);
            }
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
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Fornecedor: </label>
                        <select
                            name="ownerFornecedor"
                            id="meuSelect"
                            value={inputMerchandise.ownerFornecedor}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Escolha o Fornecedor
                            </option>
                            {supplier
                                .filter((supplier) => supplier.status !== false)
                                .map((supplier) => (
                                    <option
                                        key={supplier.id}
                                        value={supplier.id}
                                    >
                                        {supplier.nome}
                                    </option>
                                ))}
                        </select>
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
                    <div className="flex justify-evenly items-center pt-5">
                        <div>
                            <input
                                type="radio"
                                id="pix"
                                name="pagamento"
                                value="pix"
                                onChange={(e) => setPayment(e.target.value)}
                                
                            />
                            <label for="pix" className="p-2">PIX</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="especie"
                                name="pagamento"
                                value="especie"
                                onChange={(e) => setPayment(e.target.value)}
                                
                            />
                            <label for="especie" className="p-2">ESPÉCIE</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="cartao"
                                name="pagamento"
                                value="cartao"
                                onChange={(e) => setPayment(e.target.value)}
                                
                            />
                            <label for="cartao" className="p-2">CARTÃO</label>
                        </div>
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
