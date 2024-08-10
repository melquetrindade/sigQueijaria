import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosList } from "react-icons/io";
import CrudNav from "../crudNav";
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import styles from '../styles/navProduct.module.css'

export default function ProductCrud() {
    const router = useRouter()
    const [products, setProducts] = useState([])
    const [idProducts, setIdProducts] = useState([])
    const [search, setSearch] = useState("");

    const actions = [
        // { icon: FaPlus, label: "Novo Produto", color: "text-sky-400", onClick: () => window.location.href = "/product/create"},
        { icon: IoIosList, label: "Consultar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/product/read" },
        { icon: RxUpdate, label: "Atualizar Dados", color: "text-[#01CBBF]", onClick: () => window.location.href = "/product/update" },
        { icon: RiDeleteBin6Line, label: "Excluir Produto", color: "text-red-500", onClick: () => window.location.href = "/product/delete" },
    ];

    // Carrega todo os produtos no estoque
    const loadProducts = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/produtos/');
            const data = await response.json();
            setProducts(data)
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Chama a função carregar produtos
    useEffect(() => {
        loadProducts()
    }, []);

    // Navega para a página de carrinho
    const navCart = () => {
        router.push({
            pathname: './cart',
            query: {listID: idProducts}
        })
    }

    // Verifica se o produto já está no carrinho
    const checkID = (id) => {
        return idProducts.includes(id)
    }

    // Adiciona o produto ao carrinho
    const pushId = (id) => {
        var aux = []
        idProducts.forEach(products => {
            aux.push(products)
        })
        aux.push(id)
        setIdProducts(aux)
    }

    // Remove o produto do carrinho
    const removeID = (id) => {
        var aux = []
        aux = idProducts.filter(products => products !== id);
        setIdProducts(aux)
    }

    // Função que adiciona o produto ao carrinho (se não ainda não estiver) ou remove (se já estiver)
    const saveID = (id, qtd) => {
        if(qtd > 0){
            if(checkID(id)){
                removeID(id)
            } else {
                pushId(id)
            }
        } else {
            console.log('qtd insuficiente')
        }  
    }

    // Retornar o valor formatado do produto
    const showPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    }

    const tHead = ["ID", "CDB", "Nome", "Quantidade", "Validade", "Preço", "Adicionar ao Carrinho"];

    const Table = () => {
        const filteredProduct = products.filter(
            (products) =>
                products.codigoBarras.includes(search)
        );

        return (
            <div>
                <table className="w-full">
                    <thead>
                        <tr>
                            {tHead.map((tHead) => (
                                <th className="bg-gray-100 border-b-2 border-gray-300 px-4 py-3 text-left text-gray-600 font-semibold">
                                    {tHead}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProduct.map((products, index) => (
                            <tr key={index}
                                className={
                                    index % 2 === 0
                                        ? "bg-gray-50"
                                        : "bg-gray-100"
                                }
                            >
                                <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                    {products.id}
                                </td>
                                <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                    {products.codigoBarras}
                                </td>
                                <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                    {products.nome}
                                </td>
                                <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                    {products.quantidade}
                                </td>
                                <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                    {products.dataValidade}
                                </td>
                                <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                    {`R$ ${products.valor}`}
                                </td>
                                <td
                                    onClick={() => saveID(products.id, products.quantidade)} 
                                    // className={`${
                                    //     products.quantidade > 0 ? 'cursor-pointer' : ''
                                    // } ${
                                    //     products.quantidade <= 0 ? 'bg-yellow-500' : checkID(products.id) ? 'bg-red-500' : 'bg-green-500'
                                    // } text-white`}
                                    className={`${
                                        products.quantidade > 0 ? 'cursor-pointer' : ''
                                    } ${
                                        products.quantidade <= 0 ? 'bg-yellow-500' : checkID(products.id) ? 'bg-red-500' : 'bg-green-500'
                                    } text-white flex justify-center items-center p-4`}
                                    >
                                        {products.quantidade <= 0 ? 'Esgotado' : checkID(products.id) ? 'Remover do carrinho' : 'Adicionar ao Carrinho'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    idProducts.length != 0
                    ?
                    <>
                        <div className={styles.buttonCart}>
                            <h1 onClick={navCart}>Ir ao Carrinho</h1>
                        </div>
                        <div style={{height: '20px'}}></div>
                    </>
                    :
                    null
                }
            </div>
        );
    }

    return(<CrudNav actions={actions} placeholder="Digite o código de barras..." TableFunction={Table} searchState={setSearch}/>)
};

