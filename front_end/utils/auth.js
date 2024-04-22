import { jwtDecode } from "jwt-decode";

export async function login(username, password, funSetUser, funcSetAuth){
    
    let response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'email': username, 'password': password})
        // body: JSON.stringify({'username': username, 'password': password}) -> antes era assim
    })
    let data = await response.json()
    if(response.status === 200){
        funcSetAuth(data.refresh)
        funSetUser(jwtDecode(data.access))
    }
    else{
        console.log('deu pau')
    }
}

export async function updateToken(tokenRefresh, funSetUser, funcSetAuth, funcSetClickLogout, funcSetLoading, loading){
    console.log('entrou no update')
    let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'refresh': tokenRefresh})
    })
    let data = await response.json()
    if(response.status === 200){
        funcSetAuth(data.refresh)
        funSetUser(jwtDecode(data.access))
    }
    else{
        funcSetClickLogout('yesClick')
    }

    if(loading){
        funcSetLoading(false)
    }
}