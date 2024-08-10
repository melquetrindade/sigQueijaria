import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import CrudNav from "../crudNav";
import { useState, useEffect } from "react";
import { jsPDF } from 'jspdf'; 
import 'jspdf-autotable'; 

export default function EmployeeCrud() {
    const [employee, setEmployee] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch("http://127.0.0.1:8000/funcionarios/");
                const dataEmployee = await data.json();
                setEmployee(dataEmployee);
            } catch (error) {
                console.error("Erro ao carregar:", error);
            }
        }

        fetchData();
    }, []);

    const tHead = ["ID", "Nome", "CPF", "E-mail", "Cargo", "Salário", "Carga Horária", "Telefone", "Atividade"];
    const Table = () => {
        const filteredEmployee = employee.filter(
            (employee) =>
                employee.cpf.includes(search)
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
                    {filteredEmployee.map((employee, index) => (
                        <tr key={index}
                            className={
                                index % 2 === 0
                                    ? "bg-gray-50"
                                    : "bg-gray-100"
                            }
                        >
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.id}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.nome}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.cpf}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.email}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.cargo}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {`R$ ${employee.salario}`}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {`${employee.cargaHoraria}h`}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.numTelefone}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.status ? "Ativo" : "Inativo"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
    
    const actions = [
        { icon: FaPlus, label: "Novo Funcionário", color: "text-sky-400", onClick: () => window.location.href = "/employee/create"},
        { icon: IoIosList, label: "Consultar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/employee/read" },
        { icon: RxUpdate, label: "Atualizar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/employee/update" },
        { icon: RiDeleteBin6Line, label: "Excluir Funcionário", color: "text-red-500", onClick: () => window.location.href = "/employee/delete" },
    ];

    return <CrudNav actions={actions} placeholder="Pesquise pelo CPF..." TableFunction={Table} searchState={setSearch}/>;
};

