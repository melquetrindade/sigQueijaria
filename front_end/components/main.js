import Header from './header'

export let usuario = null
export let setClickLogout = undefined

export default function MainContainer({children, user, funcSetLogout}){

    usuario = user
    setClickLogout = funcSetLogout

    return(
        <div>
            <Header/>
            <div className="py-0 px-0 max-w-full min-h-screen-8.8vh flex justify-center">
                {children}
            </div>
        </div>
    )
}