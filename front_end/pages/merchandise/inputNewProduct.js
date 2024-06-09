import { useState, useEffect } from "react";

export default function InputNewProduct() {
    const [supplier, setSupplier] = useState([]);
    const [inputNewProduct, setInputNewProduct] = useState({
        nome: "",
        tipo: "",
        dataValidade: "",
        qtdMinima: "",
        quantidade: "",
        valor: "",
    });
    const [inputMerchandise, setInputMerchandise] = useState({
        quantidade: "",
        codigo: "",
        ownerFornecedor: "",
        data: "",
        valor: "",
    });

    // Pegando os valores "name" e "value" para formar o JSON
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputMerchandise({ ...inputMerchandise, [name]: value });
    };

    const handleChangeNewProduct = (e) => {
        const { name, value } = e.target;
        setInputNewProduct({ ...inputNewProduct, [name]: value });
    };


    // PUXANDO OS FORNECEDORES, PARA SEREM SELECIONADOS NO SELECT
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

    // SUBMETENDO
    const handleSubmit = async (e) => {
        // Esta função envia os dados do inputMerchandise para o back usando o método POST
        e.preventDefault();

        try {
            const registerNewProduct = await fetch(
                `http://127.0.0.1:8000/produtos/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputNewProduct),
                }
            );

            const merchandiseQuantity = {...inputMerchandise, quantidade: inputNewProduct.quantidade};
            const registerInputMerchandise = await fetch(
                "http://127.0.0.1:8000/entradasMercadorias/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(merchandiseQuantity),
                }
            );

            const data = await registerInputMerchandise.json(); // transforma a resposta em JSON
            const dataUpdated = await registerNewProduct.json();
            console.log(data);
            console.log(dataUpdated);

            setInputNewProduct({
                nome: "",
                tipo: "",
                dataValidade: "",
                qtdMinima: "",
                quantidade: "",
                valor: "",
            });
            setInputMerchandise({
                quantidade: "",
                codigo: "",
                ownerFornecedor: "",
                data: "",
                valor: "",
            });
        } catch (error) {
            console.error("Erro ao inserir o novo produto!", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-2/4 my-4 max-w-full p-3">
            <div className="shadow-lg shadow-slate-400 max-w-full">
                <h1 className="w-full text-center p-[10px] bg-gradient-to-bl from-[#09173E] via-[#03475B] to-[#084D6E]/75 text-white font-bold text-2xl">
                    Cadastrar Novo Produto
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white px-6 py-5 flex flex-col w-[470px] max-w-full gap-2"
                >
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Nome: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 100"
                            type="text"
                            name="nome"
                            value={inputNewProduct.nome}
                            onChange={handleChangeNewProduct}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Tipo: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 100"
                            type="text"
                            name="tipo"
                            value={inputNewProduct.tipo}
                            onChange={handleChangeNewProduct}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Validade: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 100"
                            type="date"
                            name="dataValidade"
                            value={inputNewProduct.dataValidade}
                            onChange={handleChangeNewProduct}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Quantidade Mínima:{" "}
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 100"
                            type="text"
                            name="qtdMinima"
                            value={inputNewProduct.qtdMinima}
                            onChange={handleChangeNewProduct}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Quantidade: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 100"
                            type="text"
                            name="quantidade"
                            value={
                                inputNewProduct.quantidade
                            }
                            onChange={handleChangeNewProduct}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Valor do Produto:{" "}
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 100"
                            type="text"
                            name="valor"
                            value={inputNewProduct.valor}
                            onChange={handleChangeNewProduct}
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
                            {supplier.map((supplier) => (
                                <option key={supplier.id} value={supplier.id}>
                                    {supplier.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Data da Entrada:{" "}
                        </label>
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
                        <label className="font-semibold">
                            Valor a pagar:{" "}
                        </label>
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
