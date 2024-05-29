import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import CrudNav from "../crudNav";

export default function EmployeeCrud() {
    const actions = [
        { icon: FaPlus, label: "Novo Funcionário", color: "text-sky-400", onClick: () => window.location.href = "/employee/create"},
        { icon: IoIosList, label: "Consultar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/employee/read" },
        { icon: RxUpdate, label: "Atualizar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/employee/update" },
        { icon: RiDeleteBin6Line, label: "Excluir Funcionário", color: "text-red-500", onClick: () => window.location.href = "/employee/delete" },
    ];

    return <CrudNav actions={actions} placeholder="Digite o nome ou CNPJ..." />;
};

