import React from 'react';
import Link from 'next/link';

export default function NavEmployee() {
    return (
        <nav>
            <h2>Navegação temporária até aplicar a estilização do CRUD - Funcionário</h2>
            <div>
                <Link href="createEmployee" passHref>
                    Inserir Funcionário
                </Link>
            </div>
            <div>
                <Link href="read" passHref>
                    Consultar Funcionário
                </Link>
            </div>
            <div>
                <Link href="updateEmployee" passHref>
                    Atualizar Funcionário
                </Link>
            </div>
        </nav>
    );
}
