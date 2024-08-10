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
    // const [search, setSearch] = useState("");

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
        idProducts.forEach(item => {
            aux.push(item)
        })
        aux.push(id)
        setIdProducts(aux)
    }

    // Remove o produto do carrinho
    const removeID = (id) => {
        var aux = []
        aux = idProducts.filter(item => item !== id);
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

    const Table = () => {
        const filteredEmployee = employee.filter(
            (employee) =>
                employee.cpf.toLowerCase().includes(search.toLowerCase())
        );

        return (
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
                    {filteredEmployee.map((employee, index) => (
                        <tr key={index}
                            className={
                                index % 2 === 0
                                    ? "bg-gray-50"
                                    : "bg-gray-100"
                            }
                        >
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.id}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.nome}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.cpf}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.email}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.cargo}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.salario}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.cargaHoraria}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.numTelefone}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">
                                {employee.status ? "Ativo" : "Inativo"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return(
        <div>
            {/* <CrudNav actions={actions} placeholder="Digite o nome ou CNPJ..." /> */}
            <div className={styles.contTable}>
                {
                    products.length != 0
                    ?
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>CDB</th>
                                <th>Nome</th>
                                <th>QTD</th>
                                <th>Data de Validade</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tBody}>
                            {products.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.codigoBarras}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.dataValidade}</td>
                                    <td>{`R$ ${showPrice(item.valor)}`}</td>
                                    <td 
                                        onClick={() => saveID(item.id, item.quantidade)} 
                                        style={{
                                            cursor: item.quantidade > 0 ? 'pointer' : null, 
                                            backgroundColor: item.quantidade <= 0 ? 'yellow' : checkID(item.id) ? 'red' : 'green',
                                            color: 'white'
                                        }}
                                        >
                                            {item.quantidade <= 0 ? 'Esgotado' : checkID(item.id) ? 'remover do carrinho' : 'adicionar ao Carrinho'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    <h1>Sem produtos no estoque</h1>
                }
            </div>
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
    )
};

