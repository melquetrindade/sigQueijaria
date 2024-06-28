import React, { useState } from "react";
import { useRouter } from "next/router";

export default function AddClient() {
    const [cliente, setCliente] = useState({
        cpf: "",
        rg: "",
        nome: "",
        email: "",
        numTelefone: "",
        dataNascimento: "",
    });
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = async (e) => {
        // esta função envia os dados do cliente para o back usando o método POST
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/clientes/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cliente),
            });
            if(response.status == 200 || response.status == 201){
                const data = await response.json(); // transforma a resposta em JSON
                console.log(data);
                router.push({
                    pathname: '../address/create',
                    query: {idOwner: data.id, typeOwner: "clientes"}
                })
                setCliente({
                    cpf: "",
                    rg: "",
                    nome: "",
                    email: "",
                    numTelefone: "",
                    dataNascimento: "",
                });
            } else{
                console.log(response)
            }
            
        } catch (error) {
            console.error("Erro ao inserir cliente!", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-2/4 my-4 max-w-full p-3">
            <div className="shadow-lg shadow-slate-400 max-w-full">
                <h1 className="w-full text-center p-[10px] bg-gradient-to-bl from-[#09173E] via-[#03475B] to-[#084D6E]/75 text-white font-bold text-2xl">
                    Cadastrar Cliente
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white px-6 py-5 flex flex-col w-[470px] max-w-full gap-2"
                >
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">CPF:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 12345678909"
                            type="text"
                            name="cpf"
                            value={cliente.cpf}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">RG:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 123456789"
                            type="text"
                            name="rg"
                            value={cliente.rg}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Nome:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: Josh Dun"
                            type="text"
                            name="nome"
                            value={cliente.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Email:</label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: josh@gmail.com"
                            type="email"
                            name="email"
                            value={cliente.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Número de Telefone:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 99123456789"
                            type="tel"
                            pattern="[0-9]{11}"
                            name="numTelefone"
                            value={cliente.numTelefone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Data de Nascimento:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            required
                            type="date"
                            name="dataNascimento"
                            value={cliente.dataNascimento}
                            onChange={handleChange}
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
