import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import CrudNav from "../crudNav";

export default function ClientCrud() {
    const actions = [
        { icon: FaPlus, label: "Novo Cliente", color: "text-sky-400", onClick: () => window.location.href = "/client/create"},
        { icon: IoIosList, label: "Consultar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/client/read" },
        { icon: RxUpdate, label: "Atualizar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/client/update" },
        { icon: RiDeleteBin6Line, label: "Excluir Cliente", color: "text-red-500", onClick: () => window.location.href = "/client/delete" },
    ];

    return <CrudNav actions={actions} placeholder="Digite o nome ou CNPJ..." />;
};

