import { MdAccountBox } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiBell } from "react-icons/hi";
import SideBar from "./sideBar/sideBar";
import { useState } from "react";
import { usuario, setClickLogout } from "../main";

export default function Header2() {
    const [open, setOpen] = useState(false); //Abre e fecha o menu de usuário

    function logOut() {
        setClickLogout("yesClick");
    }

    return (
        <nav className="bg-white flex justify-between items-center px-6 sticky top-0 w-full">
            <SideBar />

            <div className="flex justify-center items-center py-2">
                <FaSearch className="size-5 cursor-pointer" />
                <HiBell className="size-6 cursor-pointer" />
                <p className="px-2">
                    Olá, <strong className="capitalize">{usuario.email}</strong>
                </p>

                <MdAccountBox
                    className="size-10 cursor-pointer relative"
                    onClick={() => {
                        setOpen(!open);
                    }}
                />
                {open && (
                    <div className="bg-slate-200 absolute right-14 w-52 py-1 top-14 rounded-md text-center">
                        <p
                            className="hover:bg-slate-300 p-1 font-bold cursor-pointer w-full"
                            onClick={logOut}
                        >
                            LogOut
                        </p>
                    </div>
                )}
            </div>
        </nav>
    );
}
