import React from "react";
import {usuario, setClickLogout} from './main'

export function logout(){
    setClickLogout('yesClick')
}

export default function NavBar(){

    return(
        <header>
            <div>
                <h1>{`Olá, ${usuario.email}`}</h1>
                <button onClick={logout}>logout</button>
            </div>
        </header>
    )
}