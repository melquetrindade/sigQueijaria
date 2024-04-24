import React from "react";
import styles from '../styles/index.module.css'
import Link from "next/link";

export default function Home(){
    return(
        <div>
            <main className={styles.main}>
                <h1>SigQueijaria - Página Inicial</h1>
                <Link href="/Cliente/create">
                    <button>Inserir Cliente</button>
                </Link>
            </main>
        </div>
    )
}