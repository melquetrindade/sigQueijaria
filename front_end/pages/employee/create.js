import React, { useState } from "react";
import { useRouter } from "next/router";

export default function AddEmployee() {
    const [employee, setEmployee] = useState({
        cpf: "",
        cargo: "",
        salario: "",
        cargaHoraria: "",
        nome: "",
        email: "",
        numTelefone: "",
        dataNascimento: "",
    });
    const router = useRouter()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        // esta função envia os dados do employee para o back usando o método POST
        e.preventDefault();

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/funcionarios/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(employee),
                }
            );
            if(response.status == 200 || response.status == 201){
                const data = await response.json(); // transforma a resposta em JSON
                console.log(data);
                router.push({
                    pathname: '../address/create',
                    query: {idOwner: data.id, typeOwner: "funcionarios"}
                })
                setEmployee({
                    cpf: "",
                    cargo: "",
                    salario: "",
                    cargaHoraria: "",
                    nome: "",
                    email: "",
                    numTelefone: "",
                    dataNascimento: "",
                });
            } else{
                console.log(response)
            }
        } catch (error) {
            console.error("Erro ao inserir employee!", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-2/4 my-4 max-w-full p-3">
            <div className="shadow-lg shadow-slate-400 max-w-full">
                <h1 className="w-full text-center p-[10px] bg-gradient-to-bl from-[#09173E] via-[#03475B] to-[#084D6E]/75 text-white font-bold text-2xl">
                    Cadastrar Funcionário
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white px-6 py-5 flex flex-col w-[470px] max-w-full gap-2"
                >
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">CPF: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 12345678909"
                            type="text"
                            name="cpf"
                            value={employee.cpf}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        {/* Definir os cargos existentes e trocar por um select */}
                        <label className="font-semibold">Cargo: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: Balconista"
                            type="text"
                            name="cargo"
                            value={employee.cargo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        {/* Salário é calculado a partir dos atributos salario e cargaHoraria */}
                        <label className="font-semibold">Salário: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 25000"
                            type="text"
                            name="salario"
                            value={employee.salario}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Carga Horária: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 8"
                            type="text"
                            name="cargaHoraria"
                            value={employee.cargaHoraria}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Nome: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: Josh Dun"
                            type="text"
                            name="nome"
                            value={employee.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">Email: </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: josh@gmail.com"
                            type="email"
                            name="email"
                            value={employee.email}
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
                            value={employee.numTelefone}
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
                            type="date"
                            name="dataNascimento"
                            value={employee.dataNascimento}
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
