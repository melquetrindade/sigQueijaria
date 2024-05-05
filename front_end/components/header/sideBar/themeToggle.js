import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
    // Estado para controlar o tema da página
    const [theme, setTheme] = useState("light");

    // Função para alternar entre os temas
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div
            className={`h-screen flex items-end p-5 bg-${theme}-bg text-${theme}-text`}
        >
            {/* Div com ícone clicável para alternar o tema */}
            <div className="cursor-pointer" onClick={toggleTheme}>
                {/* Ícone que muda com base no tema atual */}
                {theme === "light" ? (
                    <MdOutlineLightMode className="h-8 w-8" />
                ) : (
                    <MdOutlineDarkMode className="h-8 w-8" />
                )}
            </div>
        </div>
    );
}
