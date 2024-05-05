import BigContainer from "@/components/containers/bigContainer";
import SmallContainer from "@/components/containers/smallContainer";
import React from "react";

export default function Home() {
    const titles = [
        "Resultados do dia",
        "Resultados da semana",
        "Resultados do mês",
    ];

    return (
        <main className="flex justify-center items-center gap-6 p-6 flex-wrap w-full overflow-hidden">
            <BigContainer title={"Em atraso"} color={"bg-red-300"} />
            <BigContainer title={"Hoje"} color={"bg-sky-300"} />
            <BigContainer title={"Em dia"} color={"bg-teal-200"} />

            {/* <BigContainer title={"Resultados do dia"} color={"bg-red-300"} />
            <BigContainer title={"Resultados da semana"} color={"bg-sky-300"} />
            <BigContainer title={"Resultados do mês"} color={"bg-teal-200"} /> */}

            {titles.map((title, index) => {
                return (
                    <BigContainer
                        title={title}
                        key={index}
                        color="bg-teal-200"
                    />
                );
            })}

            <SmallContainer title={"Contas a pagar"} color={"bg-red-300"} />
            <SmallContainer title={"Contas a receber"} color={"bg-teal-200"} />
            <SmallContainer />
        </main>
    );
}
