import React, { useState } from "react";

export default function AddProduto() {
    const [produto, setProduto] = useState({
        codigoBarras: "",
        nome: "",
        tipo: "",
        dataValidade: "",
        qtdMinima: "",
        quantidade: "",
        valor: "",
        status: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        // esta função envia os dados do produto para o back usando o método POST
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/produtos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(produto),
            });

            const data = await response.json(); // transforma a resposta em JSON
            console.log(data);

            setProduto({
                codigoBarras: "",
                nome: "",
                tipo: "",
                dataValidade: "",
                qtdMinima: "",
                quantidade: "",
                valor: "",
                status: "",
            });
        } catch (error) {
            console.error("Erro ao inserir produto!", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-2/4 my-4 max-w-full p-3">
            <div className="shadow-lg shadow-slate-400 max-w-full">
                <h1 className="w-full text-center p-[10px] bg-gradient-to-bl from-[#09173E] via-[#03475B] to-[#084D6E]/75 text-white font-bold text-2xl">
                    Cadastrar Produto
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white px-6 py-5 flex flex-col w-[470px] max-w-full gap-2"
                >
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Código de Barras:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="codigoBarras"
                            value={produto.codigoBarras}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Nome:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="nome"
                            value={produto.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Tipo:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="tipo"
                            value={produto.tipo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Data de Validade:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="dataValidade"
                            value={produto.dataValidade}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Quantidade Mínima:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="qtdMinima"
                            value={produto.qtdMinima}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Quantidade:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="quantidade"
                            value={produto.quantidade}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Valor:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            type="text"
                            name="valor"
                            value={produto.valor}
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
