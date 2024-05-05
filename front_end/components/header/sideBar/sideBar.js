import { PiListFill } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsPeople } from "react-icons/bs";
import { LiaCheeseSolid } from "react-icons/lia";
import { GoPackageDependents } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import {
    HiOutlineCurrencyDollar,
    HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import ThemeToggle from "./themeToggle";

export default function SideBar() {
    function openSideBar() {
        document
            .getElementById("openSideBar")
            .classList.remove("left-[-360px]");
        document.getElementById("openSideBar").classList.add("left-[0px]");
    }

    function closeSideBar() {
        document.getElementById("openSideBar").classList.remove("left-[0px]");
        document.getElementById("openSideBar").classList.add("left-[-360px]");
    }

    return (
        <div>
            <PiListFill
                className="size-6 cursor-pointer"
                onClick={openSideBar}
            />
            {/* Diminuir o width em mobile */}
            <section
                id="openSideBar"
                className="fixed top-0 bg-[#09172E] h-screen w-80 text-slate-200 z-50 duration-200 border-slate-200 flex flex-col left-[-360px]"
            >
                <div className="top-0 p-3 bg-slate-900 shadow-[0_2px_1px_0_rgba(0,0,0,0.5)]">
                    <div className="flex justify-between items-center px-3">
                        <p className="text-2xl font-bold">SigQueijaria</p>
                        <img
                            className="h-8 w-auto"
                            src="/queijo.png"
                            alt="Your Company"
                        />
                        <IoIosArrowBack
                            className="size-6 cursor-pointer"
                            id="closeSideBar"
                            onClick={closeSideBar}
                        />
                    </div>
                </div>

                <ul className="text-xl flex flex-col gap-4 justify-center pt-20 p-5">
                    <li className="flex gap-2 cursor-pointer">
                        <AiOutlineHome className="size-7" /> Página Inicial
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <BsPerson className="size-7" /> Clientes
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <BsPeople className="size-7" /> Funcionários
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <GoPackageDependents className="size-7" /> Fornecedores
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <LiaCheeseSolid className="size-7" />
                        Produtos
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <IoCartOutline className="size-7" />
                        Vendas
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <HiOutlineCurrencyDollar className="size-7" />
                        Financeiro
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <HiOutlineClipboardDocumentList className="size-7" />
                        Relatórios
                    </li>
                </ul>

                <ThemeToggle />
            </section>
        </div>
    );
}
