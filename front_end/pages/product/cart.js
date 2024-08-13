import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import styles from '../styles/cart.module.css'
import { createBills } from "../bills/createBills";

export default function Cart(){
    const router = useRouter()
    const {listID} = router.query
    const [productsData, setProducts] = useState([])
    const [infoCart, setInfoCart] = useState([])
    const [cpfClient, setCPF] = useState("")
    const [hasLoad, setHasLoad] = useState({
        funcLoadProducts: "loading",
        funcFormtIDs: "loading"
    })
    const [client, setCliente] = useState("load")
    const [formPagamento, setFormPagamento] = useState("especie")
    const [idVenda, setVenda] = useState(undefined)
    const [listProducts, setListProducts] = useState([])
    
    // Carrega todos os produtos do carrinho
    const loadProducts = async () => {
        try{
            const promises = listProducts.map(async (item) => {
                const response = await fetch(`http://127.0.0.1:8000/produtos/${item}`);
                return response.json();
            });
            // Esperar que todas as promessas sejam resolvidas
            const productsData = await Promise.all(promises);
            setProducts(productsData)
            setHasLoad({
                funcLoadProducts: "carries",
                funcFormtIDs: hasLoad.funcFormtIDs
            })
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Formata a lista de IDs
    const formatIDs = () => {
        var aux = []
        if(typeof listID == 'string'){
            aux.push(listID)
            setListProducts(aux)
        } else {
            aux.push(listID)
            setListProducts(aux[0])
        }
        setHasLoad({
            funcLoadProducts: hasLoad.funcLoadProducts,
            funcFormtIDs: "carries"
        })
    }

    // Chama a função de formatar a lista de IDs
    useEffect(() => {
        formatIDs()
    }, []);

    // Chama a função de carregar produtos assim que a lista de IDs é concluída
    useEffect(() => {
        loadProducts()
    }, [listProducts])

    // Retorna para a página de produtos caso o carrinho fique vazio
    useEffect(() => {
        if(productsData.length == 0 && hasLoad.funcFormtIDs == "carries" && hasLoad.funcLoadProducts == "carries"){
            router.push({
                pathname: './nav',
            })
        }
    }, [productsData])

    // Busca o cliente dono da compra
    const loadClient = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/clientes/')
            const data = await response.json()
            var client = data.find(item => item.cpf === cpfClient);
            if(client == undefined){
                setCliente(undefined)
            } else{
                setCliente(client)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria uma "cópia" de cada produto do carrinho. É utilizado para atualizar os valores do carrinho
    if(productsData.length != 0 && infoCart.length == 0){
        var aux = []
        productsData.forEach((item) => {
            aux.push({
                productId: item.id,
                qtdCurrent: 1,
                stockCurrent: (item.quantidade - 1),
                price: item.valor
            })
        })
        setInfoCart(aux)
    }
 
    // Pega a data e hora atual do sistema
    const obterDataHoraAtual = () => {
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const ano = dataAtual.getFullYear();
        const horas = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
        const segundos = String(dataAtual.getSeconds()).padStart(2, '0');
    
        return `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`
    }

    // Busca produto do carrinho pelo ID
    const searchObjt = (id) => {
        return infoCart.find(objt => objt.productId === id);
    };
    
    // Remove uma unidade do produto no carrinho
    const removeQTD = (id) => {
        var product = searchObjt(id)
        var aux = product.qtdCurrent - 1
        if(aux > 0){
            var newStock = product.stockCurrent + 1
            var newValue = {
                productId: id,
                qtdCurrent: aux,
                stockCurrent: newStock,
                price: product.price
            }
            const novoArray = infoCart.map(product => 
                product.productId === id ? { ...product, ...newValue } : product
            );
            setInfoCart(novoArray);
        } else{
            // Remove o produto do carrinho pois a quantidade é <= a 0
            var newCart = infoCart.filter(item => item.productId !== id)
            var newData = productsData.filter(item => item.id !== id);
            setProducts(newData)
            setInfoCart(newCart)
        }
    }

    // Remove o produto do carrinho
    const discard = (id) => {
        var newCart = infoCart.filter(item => item.productId !== id)
        var newData = productsData.filter(item => item.id !== id);
        setProducts(newData)
        setInfoCart(newCart)
    }

    // Remove uma unidade do produto no carrinho
    const addQTD = (id) => {
        var product = searchObjt(id)
        var aux = product.stockCurrent - 1
        if(aux >= 0){
            var newQtd = product.qtdCurrent + 1
            var newValue = {
                productId: id,
                qtdCurrent: newQtd,
                stockCurrent: aux,
                price: product.price
            }
            const novoArray = infoCart.map(product => 
                product.productId === id ? { ...product, ...newValue } : product
            );
            setInfoCart(novoArray);
        } else {
            console.log('não adiciona ao carrinho pois já esgotou o estoque')
        }
    }

    // Retorna a quantidade atual do produto no carrinho
    const qtdCurrent = (id) => {
        var product = infoCart.find(objt => objt.productId === id);
        return product.qtdCurrent
    }

    // Retorna o estoque atual do produto
    const showStock = (id) => {
        var product = searchObjt(id)
        return product.stockCurrent
    }

    // Retorna um valor formatado
    const showPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    }

    // Retorna o subTotal atual do produto no carrinho
    const showSubTotal = (id) => {
        var product = searchObjt(id)
        var subTotal = (product.qtdCurrent * product.price)
        return subTotal.toFixed(2).replace('.', ',');
    }

    // Retorna o valor total da compra
    const showTotal = () => {
        var total = 0
        infoCart.forEach((item) => {
            total += (item.qtdCurrent * item.price)
        })
        return total.toFixed(2).replace('.', ',')
    }

    // Filtra a entrada do usuário para permitir apenas números
    const handleChange = (e) => {
        const inputText = e.target.value
        if (/^[0-9']+$/.test(inputText) || inputText === '') {
            if(inputText.length != 11){
                setCliente("load")
            }
            setCPF(inputText)
        }
    };

    // Se o cpf for informado corretamente, chama a função para buscar o cliente
    const searchCliente = () => {
        if(cpfClient.length == 11){
            loadClient()
        } else {
            console.log('cpf inválido')
        }
    }

    // Armazena a forma de pagamento da venda
    const handleRadioChange = (e) => {
        const formPag = e.target.value;
        setFormPagamento(formPag)
    }

    // Se existir um cliente vinculado a venda, então é iniciado o processo de atualização e criação das tabelas com as informações da venda
    const concludeSale = () => {
        if(client != "load" && client != undefined && formPagamento){
            updateProducts()
            createVenda()
        } else{
            console.log('add um cliente a venda')
        }
    }

    // Cria objeto para a tabela Venda_Produto
    const createObjtVendaProduto = (id) => {
        var listObjt = []
        infoCart.forEach((item) => {
            var subTotal = (item.qtdCurrent * item.price)
            listObjt.push({
                ownerVenda: id,
                ownerProduto: item.productId,
                quantidade: item.qtdCurrent,
                valor: subTotal.toFixed(2),
            })
        })
        return listObjt
    }

    // Cria a tabela Venda_Produtos
    const createVendaProdutos = async (id) => {
        const objts = createObjtVendaProduto(id)
        try{
            const promises = objts.map(async (item) => {
                const response = await fetch(`http://127.0.0.1:8000/vendasProdutos/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(item),
                });
                return response.json();
            });
            // Esperar que todas as promessas sejam resolvidas
            const data = await Promise.all(promises);
            if(data){
                createNotaFiscal(data, id)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria objeto para a tabela de Nota Fiscal
    const createObjtNotaFiscal = (objtData, id) => {
        var dataAtual = obterDataHoraAtual()
        const objt = {
            ownerVenda: id,
            data: dataAtual,
            listVendaProduto: []
        }
        objtData.forEach((item) => {
            objt.listVendaProduto.push(item.id)
        })
        return objt
    }

    // Cria a tabela Nota_Fiscal
    const createNotaFiscal = async (objtData, id) => {
        const objtNotaFiscal = createObjtNotaFiscal(objtData, id)
        try{
            const response = await fetch("http://127.0.0.1:8000/notasFiscais/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objtNotaFiscal),
            });
            if(response.status == 201){
                createFormPagamento(id)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria objeto para a tabela Método_Pagamento
    const createObjtFormPagamento = () => {
        const objt = {
            metodo: "",
            valor: 0
        }
        var total = 0
        infoCart.forEach((item) => {
            total += (item.qtdCurrent * item.price)
        })
        if(formPagamento == "especie"){
            objt.metodo = "Espécie"
        } else if (formPagamento == "pix"){
            objt.metodo = "Pix"
        } else{
            objt.metodo = "Cartão"
        }
        objt.valor = total.toFixed(2) 
        return objt   
    }

    // Cria a tabela Método_Pagamento
    const createFormPagamento = async (id) => {
        const objt = createObjtFormPagamento()
        try{
            const response = await fetch("http://127.0.0.1:8000/metodosPagamentos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objt),
            });
            if(response.status == 201){
                const data = await response.json();
                createVendaPagamento(id, data.id)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria a tabela Venda_MétodoPagamento
    const createVendaPagamento = async (idDaVenda, idFormPag) => {
        try{
            const response = await fetch("http://127.0.0.1:8000/vendasMetodosPagamentos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ownerVenda: idDaVenda,
                    ownerMetodoPagamento: [idFormPag]
                }),
            });
            if(response.status == 201){
                createBills({ idBill: idDaVenda, billType: true });
                // Volta para a página inicial de produtos
                router.push({
                    pathname: './nav',
                })
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Atualiza cada produto do carrinho com o novo valor de estoque
    const updateProducts = async () => {
        try{
            const promises = infoCart.map(async (item) => {
                const response = await fetch(`http://127.0.0.1:8000/produtos/${item.productId}/`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        quantidade: item.stockCurrent
                    }),
                });
                return response.json();
            });
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria objeto para a tabela de Vendas
    const createObjtVenda = () => {
        const objt = {
            cliente: "",
            data: "",
            total: 0,
        }
        var total = 0
        infoCart.forEach((item) => {
            total += (item.qtdCurrent * item.price)
        })
        total.toFixed(2)
        var data = obterDataHoraAtual()
        objt.cliente = client.id
        objt.data = data,
        objt.total = total
        return objt
    }

    // Cria a tabela Vendas
    const createVenda = async () => {
        const objtVenda = createObjtVenda()
        try{
            const response = await fetch("http://127.0.0.1:8000/vendas/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objtVenda),
            });
            if(response.status == 201){
                const data = await response.json();
                createVendaProdutos(data.id)
                setVenda(data.id)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    return(
        <div className={styles.main}>
            <h1>Carrinho</h1>
            {
                productsData.length != 0 && infoCart != 0
                ?
                <div style={{marginTop: '2%'}}>
                    {
                        productsData.map((item, index) => (
                            <>
                                <div key={index} className={styles.contProduto}>
                                    <div className={styles.dividerCont}>
                                        <div className={styles.infoProduct}>
                                            <h1>{`CDB: ${item.codigoBarras}`}</h1>
                                            <h1>{`Nome: ${item.nome}`}</h1>
                                            <h1>{`Estoque: ${showStock(item.id)}`}</h1>
                                            <h1>{`Data de Validade: ${item.dataValidade}`}</h1>
                                            <h1>{`Valor: R$ ${showPrice(item.valor)}`}</h1>
                                        </div>
                                        <div>
                                            <div className={styles.addProduct}>
                                                <p style={{color: 'red', fontSize: '1.5rem', fontWeight: 'bolder', padding: '3px'}} onClick={() => removeQTD(item.id)}>-</p>
                                                <h1 style={{backgroundColor: 'white', padding: '7px', fontWeight: '600'}}>{qtdCurrent(item.id)}</h1>
                                                <p style={{color: 'green', fontSize: '1.5rem', fontWeight: 'bolder', padding: '3px'}} onClick={() => addQTD(item.id)}>+</p>
                                            </div>
                                            <div className={styles.descarte} onClick={() => discard(item.id)}>
                                                <h1>Descartar Produto</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.subTotal}>
                                        <h1>SubTotal: </h1>
                                        <h1>{`R$ ${showSubTotal(item.id)}`}</h1>
                                    </div>
                                </div>
                                <div style={{height: '10px'}}></div>
                            </>
                        ))
                    }
                    <div style={{height: '20px'}}></div>
                </div>
                :
                <h1 style={{marginTop: '2%'}}>O carrinho está vazio</h1>
            }
            <hr style={{border: '1px solid grey'}}></hr>
            <h1>Cliente</h1>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2%'}}>
                <div style={{width: '50%'}}>
                    <div className={styles.contForm}>
                        <form className="px-6 py-5 flex flex-col w-[470px] max-w-full gap-2">
                            <div className="flex flex-col justify-center gap-1">
                                <label className="font-semibold">CPF do Cliente:</label>
                                <input 
                                    className="border-0 border-b-2 shadow-sm shadow-slate-400"
                                    type="text" 
                                    placeholder="ex: 12345678900"
                                    minLength={11}
                                    maxLength={11}
                                    required
                                    value={cpfClient}
                                    name="cpf"
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </form>
                        <div className={styles.buttonSearch} onClick={searchCliente}>
                            <h1>Pesquisar</h1>
                        </div>
                    </div>
                    <div style={{width: '100%'}}>
                        {
                            client == undefined
                            ?
                            <h1>Não exite cliente cadastrado com esse CPF</h1>
                            :
                            client != undefined && client != "load"
                            ?
                            <h1>{`Cliente: ${client.nome}`}</h1>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            <hr style={{border: '1px solid grey'}}></hr>
            <h1 style={{marginTop: '1%', marginBottom: '0.5%'}}>Forma de Pagamento</h1>
            <div style={{marginBottom: '2%'}}>
                <h1 style={{marginBottom: '1%'}}>Selecione a forma de pagamento abaixo:</h1>
                <div className={styles.formPagamento}>
                    <form>
                        <div>
                            <input type="radio" id="pix" name="pagamento" value="pix" checked={formPagamento == 'pix' ? true : false} onChange={handleRadioChange}/>
                            <label for="pix" className={styles.radioLabel}>PIX</label>
                        </div>

                        <div>
                            <input type="radio" id="especie" name="pagamento" checked={formPagamento == 'especie' ? true : false}  value="especie" onChange={handleRadioChange}/>
                            <label for="especie" className={styles.radioLabel}>ESPÉCIE</label>
                        </div>

                        <div>
                            <input type="radio" id="cartao" name="pagamento" value="cartao" checked={formPagamento == 'cartao' ? true : false} onChange={handleRadioChange}/>
                            <label for="cartao" className={styles.radioLabel}>CARTÃO</label>
                        </div>
                    </form>
                </div>
            </div>
            <hr style={{border: '1px solid grey'}}></hr>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1%', marginBottom: '1%'}}>
                <div className={styles.contTotal}>
                    <h1>Total: </h1>
                    <h1>{`R$ ${showTotal()}`}</h1>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '2%'}} onClick={concludeSale}>
                <div className={styles.buttonPurchase}>Realizar Compra</div>
            </div>
        </div>
    )
}