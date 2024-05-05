import Head from "next/head";
import React, { useState, useEffect } from "react";
import Main from "../components/main";
import { login, updateToken, createConta } from "../utils/auth";
import "./styles/globals.css";
import { jwtDecode } from "jwt-decode";
import Login from "./account/login";
import Register from "./account/register";

export default function MyApp({ Component, pageProps }) {
    var chave = false;

    const [user, setUser] = useState(null);
    const [authTokens, setAuthTokens] = useState(null);
    const [clickLogout, setLogout] = useState("noClick");
    let [loading, setLoading] = useState(true);
    const [isLogin, setLogin] = useState(true);

    if (clickLogout == "yesClick") {
        console.log("click == yes");
        chave = true;
    }

    useEffect(() => {
        if (chave == true) {
            setUser(null);
            setAuthTokens(null);
            setLogout("noClick");
            localStorage.removeItem("authTokens");
            chave == false;
        }
    }, [chave]);

    if (authTokens != null) {
        localStorage.setItem("authTokens", authTokens);
    }

    useEffect(() => {
        const userSave = localStorage.getItem("authTokens");

        if (userSave != null) {
            const usuario = jwtDecode(localStorage.getItem("authTokens"));
            setUser(usuario);
            setAuthTokens(userSave);
        }
    }, []);

    const handlerLogin = async () => {
        const valueUsername = document.getElementById("emailLogin").value;
        const valuePass = document.getElementById("passwordLogin").value;
        login(valueUsername, valuePass, setUser, setAuthTokens);
    };

    useEffect(() => {
        if (loading) {
            updateToken(
                authTokens,
                setUser,
                setAuthTokens,
                setLogout,
                setLoading,
                loading
            );
        }

        let minutes = 1000 * 60 * 4;
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken(
                    authTokens,
                    setUser,
                    setAuthTokens,
                    setLogout,
                    setLoading,
                    loading
                );
            }
        }, minutes);
        return () => clearInterval(interval);
    }, [authTokens, loading]);

    const criarConta = async () => {
        const valueEmail = document.getElementById("email").value;
        const valueUsername = document.getElementById("username").value;
        const valuePass = document.getElementById("password").value;
        const valuePass2 = document.getElementById("password2").value;
        createConta(valueEmail, valueUsername, valuePass, valuePass2, setLogin);
    };

    if (user) {
        return (
            <div>
                <Main user={user} funcSetLogout={setLogout}>
                    <Head>
                        <meta
                            http-equiv="X-UA-Compatible"
                            content="IE=edge"
                        ></meta>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        ></meta>
                    </Head>
                    <Component {...pageProps} />
                </Main>
            </div>
        );
    }

    const toggleLogin = () => {
        if (isLogin) setLogin(false);
        else {
            setLogin(true);
        }
    };

    return (
        <div>
            {isLogin == true ? (
                <Login loginButton={handlerLogin} toggleButton={toggleLogin} />
            ) : (
                <Register
                    createAccount={criarConta}
                    toggleButton={toggleLogin}
                />
            )}
        </div>
    );
}
