import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import styles from '../styles/navBox.module.css'

export default function Caixa(){
    const router = useRouter()
    const [caixas, setCaixas] = useState([]) // lista com todos os caixas
    const [showModal, setShowModal] = useState(false) // controla a modal
    const [objtCaixa, setObjtCaixa] = useState({
        valorInicial: "",
        valorAtual: "",
        dataHoraAberturaAtual: ""
    }) // objeto para criar um novo caixa
    const [updatestate, setUpdateState] = useState(false) // se um caixa for atualizado a página tbm é

    // carrega a lista de caixas do BD
    const loadCaixas = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/caixas/');
            const data = await response.json();
            setCaixas(data)
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // cria um novo caixa
    const createCaixa = async () => {
        const objt = createObjtCaixa()
        try{
            const response = await fetch("http://127.0.0.1:8000/caixas/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objt),
            });
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // monta o objeto caixa
    const createObjtCaixa = () => {
        var dataCaixa = {
            valorInicial: parseFloat(objtCaixa.valorInicial),
            valorAtual: parseFloat(objtCaixa.valorInicial),
            dataHoraAberturaAtual: obterDataHoraAtual(),
            isOpen: true
        }
        return dataCaixa
    }

    // retorna a data e hora atual do PC
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

    // Chama a função carregar caixas
    useEffect(() => {
        loadCaixas()
    }, []);

    // chama a função carregar caixas (para atualizar o novo estado) se houver update de alguma caixa
    useEffect(() => {
        loadCaixas()
    }, [updatestate]);

    // faz a mudança para fechar ou abrir a modal
    const showCaixa = () => {
        setShowModal(!showModal)
    }

    // verifica se está tudo ok para processeguir com o processo de criar novo caixa
    const newCaixa = () => {
        var numeroDouble = parseFloat(objtCaixa.valorInicial)
        if(objtCaixa.valorInicial != ""){
            if(numeroDouble > 0){
                showCaixa()
                createCaixa()
            } else{
                console.log('mostra erro, não pode registrar caixa com valor negativo')
            }
        } else{
            console.log('entrada inválida')
        }
    }

    // filtro para formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setObjtCaixa({ ...objtCaixa, [name]: value });
    };

    // navega para a página de pagar ou receber contas
    const detailsBox = (idBox) => {
        var caixa = caixas.find(objt => objt.id === idBox);
        if(caixa.isOpen){
            router.push({
                pathname: './accounts',
                query: {id: idBox}
            })
        } else{
            console.log('o caixa está fechado')
        }
    }

    // monta o objeto utilizado para fazer update de um caixa
    const createObjtUpdateBox = (id) => {
        var caixa = caixas.find(objt => objt.id === id);
        const newData = {
            valorInicial: caixa.valorInicial,
            valorAtual: caixa.valorAtual,
            dataHoraAberturaAtual: obterDataHoraAtual(),
            isOpen: true
        }
        return newData
    }

    // verifica se é uma operação de fechar ou abrir caixa
    const updateBox = async (id, isClosed) => {
        if(isClosed == 'closed'){
            var caixa = caixas.find(objt => objt.id === id);
            if(caixa.valorAtual >= 100){
                registerDayBox(caixa)
            } else{
                console.log('o caixa precisar ter no mínimo R$ 100 reais para poder fechar')
            }
        } else{
            openBox(id)
        }
    }

    // Abre o Caixa
    const openBox = async (id) => {
        const newCaixa = createObjtUpdateBox(id)
        try{
            const response = await fetch(`http://127.0.0.1:8000/caixas/${id}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCaixa),
            });
            if(response.status == 200){
                setUpdateState(!updatestate)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria o objeto utilizado para criar a tabela de DiaCaixa
    const createDayBox = (caixa) => {
        const dayBox = {
            dataHoraAbertura: caixa.dataHoraAberturaAtual,
            dataHoraEncerramento: obterDataHoraAtual(),
            valorInicial: caixa.valorInicial,
            valorFinal: caixa.valorAtual
        }
        return dayBox
    }

    // Cria a Tabela de DiaCaixa
    const registerDayBox = async (caixa) => {
        const objtDayBox = createDayBox(caixa)
        try{
            const response = await fetch(`http://127.0.0.1:8000/diasCaixas/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objtDayBox),
            });
            if(response.status == 201){
                const data = await response.json()
                createCaixaDiaCaixa(caixa, data.id)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria a tabela de CaixaDiaCaixa
    const createCaixaDiaCaixa = async (caixa, idDiaCaixa) => {
        try{
            const response = await fetch(`http://127.0.0.1:8000/caixasDiasCaixas/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ownerCaixa: caixa.id,
                    ownerDiaCaixa: idDiaCaixa
                }),
            });
            if(response.status == 201){
                finishClosed(caixa)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    // Cria o objeto para finalizar a operação de fechar o caixa
    const objtFinish = () => {
        const objt = {
            valorInicial: 100,
            valorAtual: 100,
            dataHoraAberturaAtual: obterDataHoraAtual(),
            isOpen: false
        }
        return objt
    }

    // Finaliza a operação de fechar caixa, prepara o caixa para a próxima abertura
    const finishClosed = async (caixa) => {
        const newCaixa = objtFinish(caixa)
        try{
            const response = await fetch(`http://127.0.0.1:8000/caixas/${caixa.id}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCaixa),
            });
            if(response.status == 200){
                setUpdateState(!updatestate)
            }
        } catch(error){
            console.error('Erro ao adicionar dado:', error);
        }
    }

    return(
        <div className={styles.main}>
            <div>
                <div onClick={showCaixa} className={styles.buttonRegisterBox}>
                    <h1>Registrar novo Caixa</h1>
                </div>
                {
                    caixas.length != 0
                    ?
                    <div className={styles.contentCaixas}>
                        <div className={styles.contCaixas}>
                            {caixas.map((item, index) => (
                                <div key={index}>
                                    <div onClick={() => detailsBox(item.id)}>
                                        <div className={styles.linha01}>
                                            <p>{`CAIXA ${index + 1}`}</p>
                                            <div className={item.isOpen ? styles.teste1 : styles.teste2}></div>
                                        </div>
                                        <h1 className={styles.valorCaixa}>{`VALOR: R$ ${item.valorAtual.toFixed(2).replace('.', ',')}`}</h1>
                                        <h1 className={styles.dataCaixa}>{`${item.isOpen ? 'ABERTO' : 'FECHADO'} EM ${item.dataHoraAberturaAtual}`}</h1>
                                    </div>
                                    <div className={item.isOpen ? styles.buttonClosedCaixa : styles.buttonOpenCaixa} onClick={()=>updateBox(item.id, item.isOpen ? 'closed' : 'open')}>{item.isOpen ? 'FECHAR' : 'ABRIR'}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <h1>Não existe caixas, registe um!</h1>
                }
                <div style={{display: showModal ? null : 'none'}}>
                    <div className={styles.fade}>
                        <div className={styles.containerForm}>
                        <form
                            className="bg-white px-6 py-5 flex flex-col w-[470px] max-w-full gap-2"
                        >
                            <div className="flex flex-col justify-center gap-1">
                                <label className="font-semibold">Valor Inicial:</label>
                                <input
                                    className="border-0 border-b-2 shadow-sm shadow-slate-400"
                                    placeholder="Ex: 200"
                                    type="text"
                                    name="valorInicial"
                                    value={objtCaixa.valorInicial}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="w-full py-2 px-4 bg-[#03475B] hover:bg-[#084D6E]/95 rounded-md shadow-lg text-white font-semibold transition duration-200 mt-5"
                                onClick={newCaixa}
                                style={{textAlign: "center", cursor: 'pointer'}}
                            >
                                Salvar
                            </div>
                        </form>
                            <div className={styles.buttonCloseModal}>
                                <h1 onClick={showCaixa}>Fechar</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}