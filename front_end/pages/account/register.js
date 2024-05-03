import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function Register({ createAccount, toggleButton }) {
    const [show, setShow] = useState(true);

    function togglePassword() {
        let input = document.getElementById("password");
        if (input.type === "password") {
            input.type = "text";
            setShow(false);
        } else {
            input.type = "password";
            setShow(true);
        }
    }

    return (
        <div className="h-screen bg-slate-100 flex justify-center items-center">
            <div className="w-full max-w-sm bg-gradient-to-bl from-[#09173E] via-[#03475B] to-[#084D6E]/75 shadow-lg shadow-slate-400 mx-[0.65rem]">
                <div className="p-6">
                    <div className="flex flex-col justify-center items-center">
                        <FaUserCircle className="size-14 text-white" />
                        <h2 className="text-2xl font-bold text-center text-white m-3">
                            Criar conta
                        </h2>
                    </div>
                    <form className="space-y-6">
                        <div className="relative">
                            <input
                                placeholder="john@example.com"
                                className="peer h-10 w-full border-0 border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-[#ffffff] drop-shadow-lg"
                                required
                                id="email"
                                name="email"
                                type="email"
                            />
                            <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#ffffff] peer-focus:text-sm">
                                Email
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                placeholder="username"
                                className="peer h-10 w-full border-0 border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-[#ffffff] drop-shadow-lg"
                                required
                                id="username"
                                name="username"
                                type="text"
                            />
                            <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#ffffff] peer-focus:text-sm">
                                Usuário
                            </label>
                        </div>
                        <div className="relative flex justify-end items-center">
                            <input
                                placeholder="Password"
                                className="peer h-10 w-full border-0 border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-[#ffffff] drop-shadow-lg relative"
                                required
                                id="password"
                                name="password"
                                type="password"
                            />
                            <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#ffffff] peer-focus:text-sm">
                                Senha
                            </label>

                            {/* Mostra e esconde a senha */}
                            {show ? (
                                <IoEyeOutline
                                    className="absolute size-6 text-white mr-2"
                                    onClick={togglePassword}
                                />
                            ) : (
                                <IoEyeOffOutline
                                    className="absolute size-6 text-white mr-2"
                                    onClick={togglePassword}
                                />
                            )}
                        </div>
                        <div className="relative flex justify-end items-center">
                            <input
                                placeholder="Password"
                                className="peer h-10 w-full border-0 border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-[#ffffff] drop-shadow-lg relative"
                                required
                                id="password2"
                                name="password2"
                                type="password"
                            />
                            <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#ffffff] peer-focus:text-sm">
                                Confirme sua senha
                            </label>
                        </div>
                    </form>
                    <button
                        className="w-full py-2 px-4 bg-[#09173E]/80 hover:bg-[#09173E]/50 rounded-md shadow-lg text-white font-semibold transition duration-200 mt-7"
                        onClick={createAccount}
                    >
                        Registrar
                    </button>
                    <div className="mt-4 text-sm text-center text-white flex items-center justify-center">
                        Já tem uma conta?
                        <div
                            className="text-blue-500 hover:underline mx-1 cursor-pointer"
                            onClick={toggleButton}
                        >
                            Conectar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
