import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <h2>Navegação temporária até aplicar a estilização do CRUD - Fornecedor</h2>
            <div>
                <Link href="create" passHref>
                    Inserir Fornecedor
                </Link>
            </div>
            <div>
                <Link href="read" passHref>
                    Consultar Fornecedor
                </Link>
            </div>
            <div>
                <Link href="update" passHref>
                    Alterar Fornecedor
                </Link>
            </div>
            <div>
                <Link href="delete" passHref>
                    Deletar Fornecedor
                </Link>
            </div>

        </nav>
    );
}
