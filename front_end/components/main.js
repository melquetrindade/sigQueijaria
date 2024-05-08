import Header from "./header/header";

export let usuario = null;
export let setClickLogout = undefined;

export default function MainContainer({ children, user, funcSetLogout }) {
    usuario = user;
    setClickLogout = funcSetLogout;

    return (
        <div>
            <Header />
            <div className="p-0 max-w-full min-h-screen flex justify-center bg-slate-100">
                {children}
            </div>
        </div>
    );
}
