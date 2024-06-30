import React, {useState} from "react"
import { useRouter } from "next/router"

export default function AddAddress(){
    const router = useRouter()
    const {idOwner, typeOwner} = router.query
    console.log(`id: ${idOwner} - type: ${typeOwner}`)
    const [cidade, setCidade] = useState({
        cep: ""
    })
    const [bairro, setBairro] = useState({
        nome: ""
    })
    const [endereco, setEndereco] = useState({
        rua: "",
        numCasa: "",
        complemento: ""
    })

    const handleChangeCidade = (e) => {
        const { name, value } = e.target;
        if(name == 'cep'){
            if(value.length == 8){
                processCEP(value)
            } else {
                console.log('entrou no else')
                if(document.getElementById("regionId").value != "" && document.getElementById("cidadeId").value != ""){
                    document.getElementById("regionId").value = ""
                    document.getElementById("cidadeId").value = ""
                }
            }
        }
        setCidade({ ...cidade, [name]: value });
    };

    const handleChangeBairro = (e) => {
        const { name, value } = e.target;
        setBairro({ ...bairro, [name]: value });
    };

    const handleChangeEndereco = (e) => {
        const { name, value } = e.target;
        setEndereco({ ...endereco, [name]: value });
    };

    const processCEP = async (cep) => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            if(data.erro != true){
                document.getElementById("regionId").value = data.uf
                document.getElementById("cidadeId").value = data.localidade
            } else{
                console.log('error ao buscar cep')
            }
        } catch (error) {
            console.error("Erro ao inserir estado!", error);
        }
    }

    const saveCity = async (id) => {
        const objt = {
            owner: id,
            nome: document.getElementById("cidadeId").value,
            cep: cidade.cep
        }
        try{
            const response = await fetch("http://127.0.0.1:8000/cidades/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objt),
            })
            if(response.status == 200 || response.status == 201){
                const data = await response.json();
                console.log(data)
                await saveNeighborhood(data.id)
            } else{
                console.log('deu pau no saveCity')
            }
            
        } catch(error){
            console.error("Erro ao inserir estado!", error);
        }
    }
    
    const saveNeighborhood = async (id) => {
        const objt = {
            owner: id,
            nome: bairro.nome,
        }
        try{
            const response = await fetch("http://127.0.0.1:8000/bairros/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objt),
            })
            if(response.status == 200 || response.status == 201){
                const data = await response.json();
                console.log(data)
                await saveAddress(data.id)
            } else{
                console.log('deu pau no saveBairro')
            }
            
        } catch(error){
            console.error("Erro ao inserir estado!", error);
        }
    }

    const navPag = () => {
        if(typeOwner == 'clientes'){
            router.push({
                pathname: '../Client/nav',
            })
        } else if(typeOwner == 'funcionarios'){
            router.push({
                pathname: '../employee/nav',
            })
        } else{
            router.push({
                pathname: '../supplier/nav',
            })
        }
    }
    
    const saveAddress = async (id) => {
        const objt = {
            owner: id,
            rua: endereco.rua,
            numCasa: endereco.numCasa,
            complemento: endereco.complemento
        }
        try{
            const response = await fetch("http://127.0.0.1:8000/enderecos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objt),
            })
            if(response.status == 200 || response.status == 201){
                const data = await response.json();
                console.log(data)
                console.log('endereço cadastrado com sucesso!')
                navPag()
            } else{
                console.log('deu pau no saveEnderecos')
            }
            
        } catch(error){
            console.error("Erro ao inserir estado!", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(document.getElementById("regionId").value != "" && document.getElementById("cidadeId").value != ""){
            const objt = {
                owner: idOwner,
                nome: document.getElementById("regionId").value,
                typeOwner: typeOwner
            }
            try{
                const response = await fetch("http://127.0.0.1:8000/estados/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(objt),
                })
                if(response.status == 200 || response.status == 201){
                    const data = await response.json();
                    console.log(data)
                    await saveCity(data.id)
                } else{
                    console.log('deu pau no saveState')
                }
                
            } catch(error){
                console.error("Erro ao inserir estado!", error);
            }
        } else {
            console.log('estado e cidade estão vazios')
        }
    }

    return(
        <div className="flex flex-col justify-center items-center h-2/4 my-4 max-w-full p-3">
            <div className="shadow-lg shadow-slate-400 max-w-full">
                <h1 className="w-full text-center p-[10px] bg-gradient-to-bl from-[#09173E] via-[#03475B] to-[#084D6E]/75 text-white font-bold text-2xl">
                    Cadastrar Endereço
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white px-6 py-5 flex flex-col w-[470px] max-w-full gap-2"
                >
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            CEP:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 59360000"
                            required
                            minLength={8}
                            maxLength={8}
                            type="text"
                            name="cep"
                            value={cidade.cep}
                            onChange={handleChangeCidade}
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Estado:
                        </label>
                        <select name="region" id="regionId" className="border-0 border-b-2 shadow-sm shadow-slate-400" disabled>
                            <option selected>Estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernanbuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Cidade:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: João Pessoa"
                            disabled
                            required
                            type="text"
                            name="cidade"
                            id="cidadeId"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Bairro:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: Centro"
                            required
                            type="text"
                            name="nome"
                            value={bairro.nome}
                            onChange={handleChangeBairro}
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Rua:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: Rua da Água"
                            required
                            type="text"
                            name="rua"
                            value={endereco.rua}
                            onChange={handleChangeEndereco}
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Nº:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: 157"
                            required
                            type="text"
                            name="numCasa"
                            value={endereco.numCasa}
                            onChange={handleChangeEndereco}
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <label className="font-semibold">
                            Complemento:
                        </label>
                        <input
                            className="border-0 border-b-2 shadow-sm shadow-slate-400"
                            placeholder="Ex: Casa"
                            required
                            type="text"
                            name="complemento"
                            value={endereco.complemento}
                            onChange={handleChangeEndereco}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#03475B] hover:bg-[#084D6E]/95 rounded-md shadow-lg text-white font-semibold transition duration-200 mt-5"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    )
} 
