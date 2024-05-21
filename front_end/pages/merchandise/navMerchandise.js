import Link from "next/link";
import { useState, useEffect } from "react";
import InputMerchandise from "./inputMerchandise";



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
        <div className="flex justify-center items-center ">
            {/* <nav>
                <Link href={"/merchandise/inputMerchandise"}>
                    <p>Entrada de Mercadoria</p>
                </Link>
            </nav> */}
            {!productId && (
                <div className="bg-slate-900 text-white">
                    {produtos.map((product) => (
                    <div key={product.id} className="flex gap-5 justify-between items-center w-80 mb-5">
                        <div>{product.nome} ------ {product.quantidade}</div>
                        <button onClick={() => setProductId(product.id)}>ola</button>
                    </div>
                    ))}
                </div> 
            )}
            {productId && <InputMerchandise productId={productId}/>}
        </div>
    );
}