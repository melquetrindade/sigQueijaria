import Link from "next/link";


export default function NavMerchandise() {
    return(
        <nav>
            <Link href={"/merchandise/inputMerchandise"}>
                <p>Entrada de Mercadoria</p>
            </Link>
        </nav>
    );
}