import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import CrudNav from "../crudNav";
import { useState, useEffect } from "react";
import { jsPDF } from 'jspdf'; 
import 'jspdf-autotable'; 


export default function ClientCrud() {
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch("http://127.0.0.1:8000/clientes/");
                const dataClients = await data.json();
                setClients(dataClients);
            } catch (error) {
                console.error("Erro ao carregar:", error);
            }
        }

        fetchData();
    }, []);

    const tHead = ["ID", "Nome", "CPF", "E-mail", "Telefone", "Atividade"];
    const ClientTable = () => {
        const filteredClients = clients.filter(
            (client) =>
                client.cpf.includes(search)
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
                    {filteredClients.map((client, index) => (
                        <tr key={index}
                            className={
                                index % 2 === 0
                                    ? "bg-gray-50"
                                    : "bg-gray-100"
                            }
                        >
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {client.id}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {client.nome}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {client.cpf}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {client.email}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {client.numTelefone}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {client.status ? "Ativo" : "Inativo"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    const actions = [
        { icon: FaPlus, label: "Novo Cliente", color: "text-sky-400", onClick: () => window.location.href = "/Client/create"},
        { icon: IoIosList, label: "Consultar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/Client/read" },
        { icon: RxUpdate, label: "Atualizar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/Client/update" },
        { icon: RiDeleteBin6Line, label: "Excluir Cliente", color: "text-red-500", onClick: () => window.location.href = "/Client/delete" },
    ];

    // Função de Gerar e Baixar os relatórios
    const generateReport = () => {
        const doc = new jsPDF();

        // Adicionar título
        doc.text("Relatório de Clientes Ativos", 14, 16);

        // Gerar a tabela com os dados dos clientes
        doc.autoTable({
            startY: 20,
            head: [['ID', 'Nome', 'CPF', 'E-mail', 'Telefone', 'Atividade']], // Alterem aqui conforme o que voce quer que mostre
            // Função de filtragem, de acordo com o seu relatório
            body: clients.filter((client) => client.status === true).map(cliente => [cliente.id, cliente.nome, cliente.cpf, cliente.email, cliente.numTelefone, 'Ativo']),
        });

        // Baixar o documento
        doc.save('relatorio_clientes.pdf');
    };

    return <CrudNav actions={actions} placeholder="Pesquise pelo CPF..."  TableFunction={ClientTable} searchState={setSearch} generateReports={generateReport}/>;
};

