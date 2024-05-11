import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <h2>Produto</h2>
            <div>
                <Link href="create" passHref>
                    Inserir Produto
                </Link>
            </div>
            <div>
                <Link href="read" passHref>
                    Consultar Produto
                </Link>
            </div>
            <div>
                <Link href="update" passHref>
                    Atualizar Produto
                </Link>
            </div>
            <div>
                <Link href="delete" passHref>
                    Excluir Produto
                </Link>
            </div>
        </nav>
    );
}
