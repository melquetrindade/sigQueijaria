import React, { useState } from "react";

export default function InputMerchandise() {
    const [inputMerchandise, setInputMerchandise] = useState({
        quantidade: "",
        codigo: "",
        fornecedor: "",
        data: "",
        valor: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputMerchandise({ ...inputMerchandise, [name]: value });
    };

    const handleSubmit = async (e) => {
        // esta função envia os dados do inputMerchandise para o back usando o método POST
        e.preventDefault();

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/entradasMercadorias/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputMerchandise),
                }
            );

            const data = await response.json(); // transforma a resposta em JSON
            console.log(data);

            setInputMerchandise({
                quantidade: "",
                codigo: "",
                fornecedor: "",
                data: "",
                valor: "",
            });
        } catch (error) {
            console.error("Erro ao inserir inputMerchandise!", error);
        }
    };

    return (
        <div>
            <p>aaaa</p>
        </div>
    );
}
