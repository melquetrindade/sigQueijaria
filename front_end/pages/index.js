import React from "react";
import Link from "next/link";

export default function Home(){
    return(
        <div>
            <h1>SigQueijaria - Página Inicial</h1>
            <Link href="/Cliente">
                <button>Inserir Cliente</button>
            </Link>
        </div>
    )
}
