import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import CrudNav from "../crudNav";
import { useState, useEffect } from "react";

export default function SupplierCrud() {
    const [supplier, setSupplier] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
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

    const tHead = ["ID", "Nome", "CNPJ", "E-mail", "Telefone", "Atividade"];
    const Table = () => {
        const filteredSupplier = supplier.filter(
            (supplier) =>
                supplier.cnpj.includes(search)
        );

        return (
            <table className="w-full">
                <thead>
                    <tr>
                        {tHead.map((tHead) => (
                            <th className="bg-gray-100 border-b-2 border-gray-300 px-4 py-3 text-left text-gray-600 font-semibold">
                                {tHead}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredSupplier.map((supplier, index) => (
                        <tr key={index}
                            className={
                                index % 2 === 0
                                    ? "bg-gray-50"
                                    : "bg-gray-100"
                            }
                        >
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {supplier.id}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {supplier.nome}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {supplier.cnpj}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {supplier.email}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {supplier.numTelefone}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {supplier.status ? "Ativo" : "Inativo"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    const actions = [
        { icon: FaPlus, label: "Novo Fornecedor", color: "text-sky-400", onClick: () => window.location.href = "/supplier/create"},
        { icon: IoIosList, label: "Consultar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/supplier/read" },
        { icon: RxUpdate, label: "Atualizar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/supplier/update" },
        { icon: RiDeleteBin6Line, label: "Excluir Fornecedor", color: "text-red-500", onClick: () => window.location.href = "/supplier/delete" },
    ];

    return <CrudNav actions={actions} placeholder="Pesquise pelo CNPJ..." TableFunction={Table} searchState={setSearch}/>;
};

