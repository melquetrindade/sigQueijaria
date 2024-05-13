import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <h2>Navegação temporária até aplicar a estilização do CRUD - Cliente</h2>
            <div>
                <Link href="create" passHref>
                    Inserir Cliente
                </Link>
            </div>
            <div>
                <Link href="read" passHref>
                    Consultar Cliente
                </Link>
            </div>
            <div>
                <Link href="update" passHref>
                    Alterar Cliente
                </Link>
            </div>
        </nav>
    );
}
