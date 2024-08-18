import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import styles from '../styles/accounts.module.css'

export default function Acconunts(){
    const router = useRouter()
    const {id} = router.query // id do caixa selecionado na pág anterior
    const [caixa, setCaixa] = useState(undefined) // Caixa selecionado 
    const [contas, setContas] = useState([]) // lista com todas as contas em aberto
    const [pessoas, setPessoas] = useState([]) // lista com todos os clientes/fornecedores ligados as contas
    const [vendasEntradas, setvendasEntradas] = useState([]) // lista com todas as vendas/entradas ligadas as contas
    const [formtContas, setFormtContas] = useState([]) // nova lista que contém informações utilizadas na tabela
    const [hasContas, setToLoad] = useState(undefined) // se for igual a false (não tem contas) se for igual a true (tem contas)

    // chama a função para carregar o caixa
    useEffect(() => {
        loadCaixa()
    }, []);

    // busca da api o caixa selecionado
    const loadCaixa = async () => {
        try{
            const response = await fetch(`http://127.0.0.1:8000/caixas/${id}/`);
            if(response.status == 200){
                const data = await response.json();
                setCaixa(data)
                loadContas()
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // carrega da api todas contas (vendas/entradas) não resolvidas
    const loadContas = async () => {
        console.log('entrou no loadContas')
        try{
            var dataAux = []
            const response = await fetch('http://127.0.0.1:8000/contas/');
            if(response.status == 200){
                const data = await response.json();
                var itens = data.filter(objt => !objt.resolvida);
                if(itens.length != 0){
                    dataAux = itens
                    const objtSearch = searchVendasEntradas(dataAux)
                    loadPessoas(objtSearch)
                    setContas(dataAux)
                    
                } else{
                    setToLoad(false)
                }
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // monta objeto utilizado para buscar as vendas/entradas na api
    const searchVendasEntradas = (dataObjt) => {
        var objtSearch = []
        dataObjt.forEach(item => {
            if(item.tipoReceber){
                objtSearch.push({
                    id: item.ownerVenda,
                    url: "vendas"
                })
            } else{
                objtSearch.push({
                    id: item.ownerEntradaMercadoria,
                    url: "entradasMercadorias"
                })
            }
        });
        return objtSearch
    }

    // carrega vendas/entradas da api
    const loadPessoas = async (objt) => {
        try{
            var dataAux = []
            const promises = objt.map(async (item) => {
                const response = await fetch(`http://127.0.0.1:8000/${item.url}/${item.id}`);
                return response.json();
            });
            // Esperar que todas as promessas sejam resolvidas
            const productsData = await Promise.all(promises);
            dataAux = productsData
            const objtSearch = searchClienteFornecedor(objt, dataAux)
            loadClientesFornecedores(objtSearch)
            setvendasEntradas(dataAux)
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // carrega clientes/fornecedores da api
    const loadClientesFornecedores = async (objt) => {
        try{
            var dataAux = []
            const promises = objt.map(async (item) => {
                const response = await fetch(`http://127.0.0.1:8000/${item.url}/${item.id}`);
                return response.json();
            });
            // Esperar que todas as promessas sejam resolvidas
            const productsData = await Promise.all(promises);
            dataAux = productsData
            setPessoas(dataAux)
            setToLoad(true)
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // monta objeto utilizado para buscar as clientes/fornecedores na api
    const searchClienteFornecedor = (vendaEntrada, pessoas) => {
        const objtPessoas = []
        pessoas.forEach((item) => {
            var teste = vendaEntrada.find(objtItem => objtItem.id === item.id);
            if(teste.url == 'vendas'){
                objtPessoas.push({
                    id: item.cliente,
                    url: "clientes"
                })
            } else{
                objtPessoas.push({
                    id: item.ownerFornecedor,
                    url: "fornecedores"
                })
            }
        })
        return objtPessoas
    }

    // após o término da função de carregar contas é verificado se existe contas ou não e em seguida é feito o tratamento
    useEffect(() => {
        if(hasContas){
            if(contas.length != 0 && vendasEntradas.length != 0 && pessoas.length != 0){
                formatarContas()
            }
        } else{
            console.log('não há contas para pagar ou receber')
        }
    }, [hasContas]);
    
    // cria objetos para cada conta ativa com informações que são apresentadas na tabela
    const formatarContas = () => {
        var contasAux = []
        contas.forEach((item) => {
            if(item.tipoReceber){
                var venda = vendasEntradas.find(objtItem => objtItem.id === item.ownerVenda);
                var cliente = pessoas.find(objtItem => objtItem.id === venda.cliente)
                contasAux.push({
                    nome: cliente.nome,
                    idPessoa: cliente.cpf,
                    valor: venda.total,
                    dataCompra: venda.data,
                    dataValidade: item.dataVencimento,
                    tipo: "venda",
                    idConta: item.id,
                    idVenda: venda.id,
                    idCliente: cliente.id
                })
            } else{
                var entradaMercadoria = vendasEntradas.find(objtItem => objtItem.id === item.ownerEntradaMercadoria);
                var fornecedor = pessoas.find(objtItem => objtItem.id === entradaMercadoria.ownerFornecedor)
                contasAux.push({
                    nome: fornecedor.nome,
                    idPessoa: fornecedor.cnpj,
                    valor: entradaMercadoria.valor,
                    dataCompra: entradaMercadoria.data,
                    dataValidade: item.dataVencimento,
                    tipo: "entrada",
                    idConta: item.id,
                    idEntrada: entradaMercadoria.id,
                    idFornecedor: fornecedor.id
                })
            }
        })
        setFormtContas(contasAux)
    }

    // faz a formatação do CPF e CNPJ
    const formatarCpfECnpj = (id, isVenda) => {
        if(isVenda == 'venda'){
            id = id.replace(/\D/g, '');
            id = id.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else{
            id = id.replace(/\D/g, '');
            id = id.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }
        return id;
    }

    // navega para a pág anterior
    const navPagCaixa = () => {
        router.push({
            pathname: './nav',
        })
    }

    // desenvolver a função de pagar conta
    const pagarConta = async (item) => {
        // Só executa de o valor atual do caixa for maior do que o valor da conta a ser paga
        if (caixa.valorAtual >= item.valor) {
            // Define o novo valor do caixa
            const newValue = caixa.valor - item.valor;
            try {
                // Adiciona os valores id do caixa selecionado, id da conta, data de abertura do caixa e valor da conta a ser paga à pagamentos
                const responsePayment = await fetch("http://127.0.0.1:8000/pagamentos/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ownerCaixa: id, ownerConta: item.id, data: caixa.dataHoraAberturaAtual, valor: item.valor}),
                });

                // Se o método POST for concluído, executrá mais algumas funções
                if(responsePayment.status == 200 || responsePayment.status == 201){
                    const data = await responsePayment.json(); // transforma a resposta em JSON
                    console.log('Deu certoooo', data);

                    // Atualiza o valor do caixa após fazer o pagamento de uma conta
                    const newValueCaixa = await fetch(`http://127.0.0.1:8000/caixas/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({valorAtual: newValue}),
                    });

                    // Atualiza o status de resolvida da conta para true, para indicar que ela já foi paga
                    const billsResolved = await fetch(`http://127.0.0.1:8000/contas/${item.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({resolvida: true}),
                    });

                    const newDataCashier = await newValueCaixa.json();
                    const newDataBills = await billsResolved.json();
                    console.log(newDataCashier);
                    console.log(newDataBills);
                } else{
                    console.log(responsePayment);
                }
                
            } catch (error) {
                console.error("Erro ao inserir cliente!", error);
            }
        } else {
            // console.log(caixa.valor);
            console.log('Não há dinheiro suficiente no caixa');
        }
        // console.log('pagar conta aqui')
    }

    // desenvolver a função de receber conta
    const receberConta = () => {
        console.log('receber conta aqui')
    }

    return(
        <div className={styles.main}>
            <div>
                <h1 className={styles.title}>Contas Pendentes</h1>
                {
                    caixa != undefined
                    ?
                    <div className={styles.contCaixa}>
                        <div>
                            <h1>{`CAIXA ${caixa.id}`}</h1>
                            <h1>{`VALOR ATUAL: ${caixa.valorAtual.toFixed(2).replace('.', ',')}`}</h1>
                        </div>
                    </div>
                    :
                    <h1>Carregando caixa...</h1>
                }
                <div className={styles.contTable}>
                    {
                        formtContas.length != 0
                        ?
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID Conta</th>
                                    <th>Cliente/Fornecedor</th>
                                    <th>CPF/CNPJ</th>
                                    <th>Data da Compra</th>
                                    <th>Data de Validade</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tBody}>
                                {formtContas.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.idConta}</td>
                                        <td>{item.nome}</td>
                                        <td>{formatarCpfECnpj(item.idPessoa, item.tipo)}</td>
                                        <td>{item.dataCompra}</td>
                                        <td>{item.dataValidade}</td>
                                        <td>{`R$ ${item.valor.toFixed(2).replace('.', ',')}`}</td>
                                        <td 
                                            className={item.tipo == 'venda' ? styles.buttonReceber : styles.buttonPagar}
                                            onClick={() => item.tipo === 'venda' ? receberConta() : pagarConta(item)}
                                        >
                                            <p>{item.tipo == 'venda' ? 'RECEBER' : 'PAGAR'}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        :
                        <h1>Sem contas para pagar ou receber</h1>
                    }
                </div>
                <div className={styles.buttonVoltar} onClick={navPagCaixa}>Voltar</div>
            </div>
        </div>
    )
}