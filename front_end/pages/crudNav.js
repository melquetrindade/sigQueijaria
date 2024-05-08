import { FaPlus } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";

export default function CrudNav() {
    return (
        <div className="flex flex-col justify-evenly items-center p-2 overflow-hidden">
            <div className="flex gap-6 flex-wrap items-center justify-center my-2">
                <div className="bg-white font-bold shadow-md cursor-pointer p-4 w-52 rounded-xl flex justify-evenly items-center gap-2">
                    <FaPlus className="size-5 text-sky-400" />
                    <p>Novo Fornecedor</p>
                </div>
                <div className="bg-white font-bold shadow-md cursor-pointer p-4 w-52 rounded-xl flex justify-evenly items-center gap-2">
                    <RxUpdate className="size-5 text-[#01CBBF]" />
                    <p>Atualizar Dados</p>
                </div>
                <div className="bg-white font-bold shadow-md cursor-pointer p-4 w-52 rounded-xl flex justify-evenly items-center gap-2">
                    <RiDeleteBin6Line className="size-5 text-red-500" />
                    <p>Excluir Fornecedor</p>
                </div>
            </div>
            <div className="bg-white h-96 w-full flex flex-col rounded-xl shadow-md my-2 ">
                <div className="flex justify-between items-center p-4 text-black">
                    <div className="flex justify-end items-center">
                        <input
                            className="relative w-48 border-0 border-b-2 border-slate-300 bg-transparent focus:outline-none focus:border-slate-400 placeholder:text-sm"
                            placeholder="Digite o nome ou CNPJ..."
                        />
                        <FaSearch className="size-4 absolute" />
                    </div>
                    <SlOptionsVertical className="size-4 cursor-pointer" />
                </div>
                {/* TABLE COM OS DADOS */}
            </div>
        </div>
    );
}
