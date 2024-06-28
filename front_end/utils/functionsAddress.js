export async function saveState(objt){
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
            return [response.status, data.id]
            //await saveCity(data.id)
        } else{
            console.log('deu pau no saveState')
            return [response.status, 0]
        }
        
    } catch(error){
        console.error("Erro ao inserir estado!", error);
        return false
    }
}

export async function saveCity(objt){
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

export async function saveNeighborhood(objt){
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

export async function saveAddress(objt){
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
        } else{
            console.log('deu pau no saveEnderecos')
        }
        
    } catch(error){
        console.error("Erro ao inserir estado!", error);
    }
}
