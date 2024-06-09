import Link from "next/link";
import { useState, useEffect } from "react";
import InputMerchandise from "./inputMerchandise";
import HomePageStock from "./homePageStock";



export default function NavMerchandise() {
    const [produtos, setProdutos] = useState([]); // armazena todos os produtos obtidos da API
    const [productId, setProductId] = useState('');
    // const [idKey, setIdKey] = useState('');

    useEffect(() => { // carregamento inicial dos produtos
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/produtos/');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao carregar:', error);
            }
        }

        fetchData();
    }, []);

    console.log(productId);
    return(
        <div className="flex justify-center items-center">
            {/* <nav>
                <Link href={"/merchandise/inputMerchandise"}>
                    <p>Entrada de Mercadoria</p>
                </Link>
            </nav> */}
            {!productId && <HomePageStock produtos={produtos} setProductId={setProductId}/>}
            {productId && <InputMerchandise productId={productId}/>}
        </div>
    );
}